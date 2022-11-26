export function accordion() {
  const accordionItemHeaders = document.querySelectorAll(
    '.benefits-content__title'
  );
  const itemsOverlay = document.querySelectorAll('.benefits-content__item');

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener('click', (event) => {
      const currentlyActiveAccordionItemHeader = document.querySelector(
        '.benefits-content__title.active'
      );

      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle('active');
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }

      accordionItemHeader.classList.toggle('active');

      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains('active')) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + 'px';
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });

  itemsOverlay.forEach((accordionItemHeader1) => {
    accordionItemHeader1.addEventListener('click', () => {
      const currentlyOverlay = document.querySelector(
        '.benefits-content__item.overbg'
      );
      if (currentlyOverlay && currentlyOverlay !== accordionItemHeader1) {
        currentlyOverlay.classList.toggle('overbg');
      }
      accordionItemHeader1.classList.toggle('overbg');
    });
  });

  // const overlayBg = document.querySelectorAll('.benefits-content__item');
  // const overlayText = document.querySelector('.benefits-content__title.active');
  // overlayBg.forEach((activeOverlay) => {
  //   activeOverlay.addEventListener('click', (elem) => {
  //     const activeOverlayBg = document.querySelector(
  //       '.benefits-content__item.overbg'
  //     );
  //     if (
  //       activeOverlayBg &&
  //       activeOverlayBg !== activeOverlay &&
  //       overlayText.classList.contains('active')
  //     ) {
  //       activeOverlayBg.classList.toggle('overbg');
  //     } else if (
  //       activeOverlayBg &&
  //       activeOverlayBg !== activeOverlay &&
  //       !overlayText.classList.contains('active')
  //     ) {
  //       activeOverlayBg.classList.toggle('overbg');
  //     }
  //     activeOverlay.classList.toggle('overbg');
  //   });
  // });
}
