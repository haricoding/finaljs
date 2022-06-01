//shallow copy i.e first level of propertis will be copied

const mobile = {
    price: 9000,
    brand: "MI",
  
    feature:{
      Screen:"5i",
      Ram:"6gb"
    }
  };
  
  console.log(mobile);
  const mobileCopy = mobile; //both having same address pointing
  // towards same object that is same ref variable
  console.log(mobileCopy);
  let updateCopyFile = (mobileCopy.price = 10000);
  console.log(updateCopyFile);
  console.log(mobile);
  console.log(mobileCopy);
  
  
  const mobileCopyNew = { ...mobile }; //Shallow copy that is creating new object
  console.log((mobileCopyNew.price = 12000)); //updating on new object
  console.log(mobile); //here does not affect the mobile object//{price: 10000, brand: 'MI'}
  console.log(mobileCopyNew); //{price: 12000, brand: 'MI'}
  
  console.log((mobileCopy.brand = "Samsung"));
  console.log(mobile); //{price: 10000, brand: 'Samsung'}
  console.log(mobileCopy); //{price: 10000, brand: 'Samsung'}