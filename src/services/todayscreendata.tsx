const todayscreenData = {
   
    batches: [
      { icon: "shirt", image: require("../assets/Vector.png") , count: 3 }, // ✅ Fixed require syntax
      { icon: "hanger", image: require("../assets/hanger.png"),count: 3 }, // If this is an image, replace it with require()
    ],
  };
  
  export default todayscreenData;