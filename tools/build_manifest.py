"""Build assets/manifest.json mapping every Wiki image URL in the KB JSONs (and the old page) to a local copy.
Re-runnable: downloads only what is missing. USAGE: python3 tools/build_manifest.py"""
import sys,re,json,hashlib,urllib.request,concurrent.futures as cf
from pathlib import Path
wd=Path(sys.argv[1]) if len(sys.argv)>1 else Path(__file__).resolve().parent.parent; out=wd/"assets/wiki"; out.mkdir(parents=True,exist_ok=True)
pat=re.compile(r'https://static\.wikia\.nocookie\.net/[^"\'\s)\\]+')
srcs=["edgerunners_character_kb.json","edgerunners_scene_kb.json","edgerunners_s2_scene_kb.json","style_guides.json","factions_kb.json"]
urls=set()
for f in srcs:
    p=wd/f
    if p.exists(): urls|=set(pat.findall(p.read_text()))
H={"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140 Safari/537.36","Accept":"image/webp,image/*,*/*;q=0.8"}
def name(u):
    base=re.sub(r"[^A-Za-z0-9._-]","_",u.split("/images/")[1].split("/revision")[0].split("/")[-1]).rsplit(".",1)[0][:60]
    return f"{base}-{hashlib.sha1(u.encode()).hexdigest()[:8]}.webp"
def get(u):
    import time
    p=out/name(u)
    if p.exists() and p.stat().st_size>3000: return u,p
    for attempt in range(5):
        try:
            b=urllib.request.urlopen(urllib.request.Request(u,headers=H),timeout=60).read()
            break
        except Exception:
            time.sleep(2*(attempt+1))
    else:
        return u,None
    if len(b)<3000: return u,None
    p.write_bytes(b); return u,p
mp={};bad=[]
with cf.ThreadPoolExecutor(2) as ex:
    for u,p in ex.map(lambda u: (lambda: get(u))(), sorted(urls)):
        if p: mp[u]="assets/wiki/"+p.name
        else: bad.append(u)
(wd/"assets/manifest.json").write_text(json.dumps(mp,ensure_ascii=False,indent=0))
print(len(urls),"urls;",len(mp),"mapped;",len(bad),"failed")
