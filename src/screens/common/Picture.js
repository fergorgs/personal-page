
function Picture({ containerCssClass, imageCssClass, image }) {

  const fullImagePath = `${process.env.PUBLIC_URL}/${image}`;

  return (
      <div className={containerCssClass}>
          <img className={imageCssClass} src={fullImagePath}/>
      </div>
  );
}

export default Picture;