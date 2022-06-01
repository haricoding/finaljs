console.log("---------------Named function------------------");

function bobbleSort(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]>=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("array in assending oder",arr);
}
var arr=[10,30,70,80,50,40]
bobbleSort(arr);




console.log("---------------annonymus function------------------");

var bobbleSort=function(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]>=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("array in assending oder",arr);
}
var arr=[10,30,70,80,50,40]
bobbleSort(arr);



console.log("---------------Self invoke function------------------");

(function(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]>=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("array in assending oder",arr);
})([10,30,70,80,50,40])


console.log("-----------------Arrow function-------");


    var bobbleSort2=arry3=>{
        
    for(var i=0;i<=arry3.length;i++)
    {
        for(var j=i;j<=arry3.length;j++)
        {
            if(arry3[i]>=arry3[j])
            {
                var temp=arry3[i];
                arry3[i]=arry3[j];
                arry3[j]=temp;
          }
        }
    }
    console.log("array in assending oder",arry3);
}
var arry3=[100,30,70,80,500,40]
bobbleSort2(arry3);