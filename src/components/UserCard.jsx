
const UserCard=({user})=>{
  const{firstName,lastName,photoUrl,age,gender,about}=user;
    return (
        <div className="card bg-gray-500 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {firstName+" "+lastName}
    </h2>
    <p>{about}</p>
    {age&&gender&&<p>{age+", "+gender}</p>}
   
    <div className="card-actions justify-center my-4">
      <div className="btn btn-primary">Ignore</div>
      <div className="btn btn-secondary">Interested</div>
    </div>
  </div>
</div>
    )
}
export default UserCard;