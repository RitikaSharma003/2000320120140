import React from 'react';
const train=({data})=>{
const getdeparturetime=(departuretime,delayed)=>{
    const currenttime=new Date();
    const scheuleddeparturetime=new Date(departuretime);
   scheuleddeparturetime.setMinutes(
        scheuleddeparturetime.getMinutes()+delayed
    );
if(scheuleddeparturetime-currenttime>30*1000*60)
{
    return scheuleddeparturetime.toLocalString();

}
return null;

};
const sortedtrains=()=>{
    const currenttime=new Date();
    const sortedtrain=data.filter((train)=>
        new Date(train.departuretime)-currenttime>30*1000*60
    );
const sorttrains=sortedtrain.sort((a,b)=>{
    if(a.price!==b.price){
        return a.price-b.price;

    }
    if(a.seatsavail!==b.seatsavail)
    {
        return b.seatsavail-a.seatsavail;

    }
    return new Date(a.departuretime)-new Date(b.departuretime);

});
return sorttrains;


};

return(
    <>
    <h2>Approaching Trains</h2>
    <ul>
        {sortedtrains().map((train)=>{
          <li key={train.trainNumber}>
            <p>Train name:{train.trainName}</p>
            <p>Train Number:{train.trainNumber}</p>
            <p>Departure Time: {getdeparturetime(train.departuretime,train.delayed)}</p>
<p>Price:{train.price}</p>
<p>Availabilty seats:{train.seatsavail}</p>

          </li>
        })}
    </ul>
    </>
)
};
export default train;
