# CarDreamVLA · ACML 2026

Project page for **Maneuver Accuracy Is Not Safety: Long-Tail Hazard Reaction in VLA Driving with World Models**.

Xuewei Cao · Binhui Liu · Yanyong Zhang · Yan Xia (corresponding author)

**Website:** https://patience-joey.github.io/CarDreamVLA/

This repository contains the paper website and the camera-ready paper, supplementary material, and conference poster. It is not a release of the driving system's implementation or model weights.

## Preview locally

Serve this directory with any static HTTP server, for example:

```sh
python -m http.server 8769 --bind 127.0.0.1
```

Open `http://127.0.0.1:8769/`. There is no build step, package installation, external font request, or runtime API dependency.

## GitHub Pages

The site is served from the root of the `main` branch. `.nojekyll` preserves the buildless static files. Updates to that publishing branch trigger the Pages deployment.

## Content and evidence

- The abstract, authors, affiliations, and results follow the camera-ready manuscript.
- The route-conditioned architecture is the paper's full original figure, exported as SVG for zooming. It does not depict the separate v13 Temporal Safety module.
- The scenario gallery is the paper's original image. The hero image is a crop of its parking cut-in panel.
- The internal four-seed confirmation (240 episodes per method), route-token ablation (450 episodes per method), and external-system comparison (180 episodes per system) are separate protocols and must not be pooled.
- Overall collision improvement is inconclusive. Internal path progress is not CARLA Leaderboard RC or DS.
- The downloadable paper and supplementary PDF filenames remain paired so their cross-document links resolve.

Figures and manuscript materials remain attributed to their authors. Third-party method names and brands belong to their respective owners.

## Citation

```bibtex
@inproceedings{cao2026maneuver,
  title     = {Maneuver Accuracy Is Not Safety: Long-Tail Hazard
               Reaction in VLA Driving with World Models},
  author    = {Cao, Xuewei and Liu, Binhui and
               Zhang, Yanyong and Xia, Yan},
  booktitle = {Asian Conference on Machine Learning (ACML)},
  year      = {2026}
}
```
