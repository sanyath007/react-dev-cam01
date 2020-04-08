import React, {
  useCallback,
  useRef,
  useState
} from 'react'
import Webcam from 'react-webcam';

const vdoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

export default function WebCam() {
  // const [imageCapture, setImageCapture] = useState(null);
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // setImageCapture(imageSrc);
  }, [webcamRef]);

  return (
    <div style={{border: "1px solid #000"}}>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={vdoConstraints}
      />
      <button onClick={capture}>Capture</button>

      {/* {imageCapture && (
        <div>{imageCapture}</div>
      )} */}
    </div>
  )
}
