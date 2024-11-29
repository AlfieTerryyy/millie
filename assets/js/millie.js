// Enable dragging functionality for the shapes
document.querySelectorAll('.shape').forEach((shape) => {
  shape.addEventListener('mousedown', (event) => {
    let offsetX = event.clientX - shape.getBoundingClientRect().left;
    let offsetY = event.clientY - shape.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      shape.style.left = `${pageX - offsetX}px`;
      shape.style.top = `${pageY - offsetY}px`;
    };

    const onMouseMove = (event) => {
      moveAt(event.pageX, event.pageY);
    };

    document.addEventListener('mousemove', onMouseMove);

    shape.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMouseMove);
    });

    shape.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', onMouseMove);
    });
  });
});

// Log for debugging
console.log("Enjoy the lilac magic with bouncing and draggable shapes!");
