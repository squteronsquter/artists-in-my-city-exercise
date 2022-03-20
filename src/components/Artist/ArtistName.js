const ArtistName = (props) => {
  return (
    <>
      <div className="flex">
        <div>{props.firstname} </div>
        <div className="ml-2">{props.lastname}</div>
      </div>
    </>
  );
};
export default ArtistName;
