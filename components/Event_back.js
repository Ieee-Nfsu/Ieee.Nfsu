import Particals from "react-tsparticles"
import { loadFull } from "tsparticles";
import myobj from "./partical-config.js"
import { useCallback } from "react";

const style={
  title:"text-7xl font-semibold text-white text-center"
}

export default function Event_back(){
    const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return(
    <div>
     
      <Particals
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={myobj}
      height="280px"
      />
       
    </div>
  )
}