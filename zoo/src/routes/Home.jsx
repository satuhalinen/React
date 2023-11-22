function Home() {
  return (
    <>
      <h1>This is the home page.</h1>
      <div className="homePictures">
        <div className="animalPicture">
          <img src={`/src/assets/raspopova-marina-yt39XjxwGUE-unsplash.jpg`} />
        </div>
        <div className="birdPicture">
          <img src={`src/assets/joshua-j-cotten-r0eiuw481JM-unsplash.jpg`} />
        </div>
      </div>
    </>
  );
}

export default Home;
