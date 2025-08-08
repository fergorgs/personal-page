
function Picture({ containerCssClass, imageCssClass, image }) {

  console.log("image: " + image);

  return (
      <div class={containerCssClass}>
          <img class={imageCssClass} src={image}/>
      </div>
  );
}

export default Picture;