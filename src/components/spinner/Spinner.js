const Spinner = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         style={{ margin: '0 auto', background: 'none', display: 'block' }}
         width="150"
         height="150"
         viewBox="0 0 24 24"
      >
         <circle cx="4" cy="12" r="3" fill="#9F0013">
            <animate
               id="svgSpinners3DotsBounce0"
               attributeName="cy"
               begin="0;svgSpinners3DotsBounce1.end+0.25s"
               calcMode="spline"
               dur="0.6s"
               keySplines=".33,.66,.66,1;.33,0,.66,.33"
               values="12;6;12"
            />
         </circle>
         <circle cx="12" cy="12" r="3" fill="#9F0013">
            <animate
               attributeName="cy"
               begin="svgSpinners3DotsBounce0.begin+0.1s"
               calcMode="spline"
               dur="0.6s"
               keySplines=".33,.66,.66,1;.33,0,.66,.33"
               values="12;6;12"
            />
         </circle>
         <circle cx="20" cy="12" r="3" fill="#9F0013">
            <animate
               id="svgSpinners3DotsBounce1"
               attributeName="cy"
               begin="svgSpinners3DotsBounce0.begin+0.2s"
               calcMode="spline"
               dur="0.6s"
               keySplines=".33,.66,.66,1;.33,0,.66,.33"
               values="12;6;12"
            />
         </circle>
      </svg>
   );
};

export default Spinner;
