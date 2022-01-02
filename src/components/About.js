export default function About(props) {

    const light = 'white';
    const dark = '#011838';

    return (
        <div style={{backgroundColor:props.mode === 'light'?light:dark,
        color: props.mode==='light'?dark:light}}>
            <h3> About Us</h3>
            <div className="accordion" id="accordionExample" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}}>
  <div className="accordion-item" style={{backgroundColor:props.mode === 'light'?light:dark,
        color: props.mode==='light'?dark:light}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
       
        
        </div>
    )
}
