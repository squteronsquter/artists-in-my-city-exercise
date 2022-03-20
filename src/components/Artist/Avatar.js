const Avatar = (props) => {
  return (
    <>
      <img src="https://robohash.org/lalal?set=2" alt="Zdjęcie" />
      <p>{props.source}</p>
    </>
  );
};

export default Avatar;
