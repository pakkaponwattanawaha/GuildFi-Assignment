import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
interface Props {
  isShowObject: boolean;
  onShow: () => void;
  onNotShow: () => void;
}
export const CameraControl = ({ isShowObject, onShow, onNotShow }: Props) => {
  const { camera } = useThree();
  const cameraRef = useRef<any>();

  const handlechange = () => {
    //Angle break point
    if (!isShowObject && cameraRef.current.getPolarAngle() > Math.PI / 4) {
      onShow();
    } else if (
      isShowObject &&
      cameraRef.current.getPolarAngle() <= Math.PI / 4
    ) {
      onNotShow();
    }

    //Panning Restriction
    if (camera.position.y <= 2) {
      cameraRef.current.target.y =
        cameraRef.current.target.y *
        Math.cos(cameraRef.current.getPolarAngle());
      camera.position.setY(2);
    } else if (camera.position.y >= 10) {
      cameraRef.current.target.y =
        cameraRef.current.target.y *
        Math.cos(cameraRef.current.getPolarAngle());
      camera.position.setY(10);
    } else if (camera.position.x <= -5) {
      cameraRef.current.target.x = -5;
      camera.position.setX(-5);
    } else if (camera.position.x >= 5) {
      cameraRef.current.target.x = 5;
      camera.position.setX(5);
    } else if (camera.position.z >= 8) {
      cameraRef.current.target.z = 8;
      camera.position.setZ(8);
    } else if (camera.position.z <= -8) {
      cameraRef.current.target.z = -8;
      camera.position.setZ(-8);
    }
  };

  useEffect(() => {
    //Dolly action on wheel
    window.addEventListener("wheel", (e) => {
      if (e.deltaY < 0 && cameraRef.current.getPolarAngle() <= Math.PI / 3.75) {
        cameraRef.current.target.y -=
          0.1 * Math.cos(cameraRef.current.getPolarAngle());
        cameraRef.current.target.z -=
          0.2 * Math.cos(cameraRef.current.getPolarAngle());
      }
      if (e.deltaY > 0 && cameraRef.current.getPolarAngle() <= Math.PI / 2) {
        cameraRef.current.target.y +=
          0.1 * Math.sin(cameraRef.current.getPolarAngle());
        cameraRef.current.target.z +=
          0.3 * Math.sin(cameraRef.current.getPolarAngle());
      }
      handlechange();
    });
  }, []);
  return (
    <OrbitControls
      ref={cameraRef}
      mouseButtons={{
        LEFT: THREE.MOUSE.PAN,
        MIDDLE: THREE.MOUSE.MIDDLE,
        RIGHT: THREE.MOUSE.RIGHT,
      }}
      onChange={() => handlechange()}
      dampingFactor={0.25}
      minAzimuthAngle={0}
      maxAzimuthAngle={0}
      maxPolarAngle={Math.PI / 2.85}
      maxDistance={8.5}
      minDistance={3}
    />
  );
};
