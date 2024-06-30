// @ts-ignore
import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

let path = "botany_dense_20000_cleaned.splat";
let mode = "None";
const query = new URLSearchParams(document.location.search);
if (query.get("splat")) {
  path = query.get("splat") ?? "";
  if (path.indexOf(".splat") < 0 && path.indexOf(".ply") < 0) {
    path += ".splat";
  }
}
if (query.get("mode")) {
  mode = query.get("mode") ?? "None";
}
const viewer = new GaussianSplats3D.Viewer({
  cameraUp: [0, 1, 0],
  initialCameraPosition: [-2.5, 2.5, 0],
  initialCameraLookAt: [0, 2, 0],
  sharedMemoryForWorkers: false,
  webXRMode: GaussianSplats3D.WebXRMode[mode],
});
viewer
  .addSplatScene(path, {
    splatAlphaRemovalThreshold: 5,
    showLoadingUI: true,
    position: [0, 1, 0],
    rotation: [0, 0, 0, 1],
    scale: [1, 1, 1],
  })
  .then(() => {
    viewer.start();
  });
