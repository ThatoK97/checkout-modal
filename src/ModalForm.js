import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ModalForm( props ) {
  const handleValueChange = (e) => e.target.value;

  function onClickOutside(e) {
    const { closeModal } = props;
    const element = e.target;
    if (modalRef.current && !modalRef.current.contains(element)) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    }
  }
  function onSubmit(e) {
    const { closeModal, value } = props;
    onSubmit(value);
    closeModal();
    e.preventDefault();
    e.stopPropagation();
  }

  // define refs and timeline
  const inputRef = useRef();
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const timeline = gsap.timeline({paused: false});

  useEffect(() => {
    timeline.from(overlayRef.current, {
      duration: 0.25,
      autoAlpha: 0
    })
    .from(modalRef.current, {
      duration: 0.25,
      autoAlpha: 0,
      y: 25
    })
    timeline.play()
    inputRef.current.focus();

    document.body.addEventListener("click", onClickOutside);
    // timeline.kill()

    return () => {
      document.body.removeEventListener("click", onClickOutside);
    }
  }); // , [overlayRef.current, modalRef.current]

  // define quantity as props
  const { quantity } = props;

    return (
          <div className="modal--overlay" ref={overlayRef}>
          <div className="modal" ref={modalRef}>
          <h1>Insert a new value</h1>
          <form action="?" onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="quantity">Quantity</label>
            <div>
                <div>
                <span>
                    Select...
                </span>
                </div>
                <input ref={inputRef} value={quantity} placeholder="0.00" onChange={handleValueChange} type="text" name="quantity"></input>
                <div>
                <label htmlFor="currency">Currency</label>
                <select id="Currency" name="currency">
                    <option value="rand">R</option>
                    <option value="pula">P</option>
                </select>
                </div>
                </div>
            <button type="submit">Save new value</button>
          </form>
        </div>
        </div>
    );
}

