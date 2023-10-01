//your JS code here. If required.
/*function returnPromise(){
	return Promise(resolve,reject)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000)
	};
};
returnPromise().then((data)=>{
	setTimeout(()=>{
		let filteredData=data.filter((num)=>num%2===0);
		document.getElementById("output").innerHTML= filteredData.join(",");
			return filteredData;
	},1000);
}).then((data)=>{
setTimeout(()=>{
	let multipliedData=data.map((num)=>num*2);
		document.getElementById("output").innerHTML= multipliedData.join(",");
	},2000);
}).catch((e)=>{console.log("Code isn't correct")
			  });*/

function returnPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

returnPromise()
  .then((data) => {
    setTimeout(() => {
      // Filter odd numbers
      const filteredData = data.filter((num) => num % 2 === 0);
      document.getElementById("output").innerHTML = filteredData.join(", ");
      return filteredData;
    }, 1000);
  })
  .then((data) => {
    setTimeout(() => {
      // Multiply even numbers by 2
      const multipliedData = data.map((num) => num * 2);
      document.getElementById("output").innerHTML = multipliedData.join(", ");
    }, 2000);
  })
  .catch((error) => {
    console.error(error);
  });
