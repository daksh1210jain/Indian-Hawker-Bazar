<?php
$servername="localhost";
$username="root";
$password="";
$db="ecommerce";
$con=mysqli_connect($servername,$username,$password,$db);
if($con)
{
echo "Connection Successful<br>";
}
else
{
echo "Not connected";
}

/*
$query1="create database ecoomerce";
if(mysqli_query($con,$query1))
{
echo "Database created successfully<br>";
}

*/
/*
$query2="create table Personal_Information(Name varchar(50),Address varchar(200),Email varchar(100),Aadhar_Number BIGINT,Phone_Number BIGINT,Additional_Contact BIGINT)";
if(mysqli_query($con,$query2))
{
echo "Table created successfully<br>";
}

$query2="create table Professional_Information(Business_Name varchar(100),Product_Categories varchar(50),Product_Description varchar(225),Pricing INT)";
if(mysqli_query($con,$query2))
{
echo "Table created successfully<br>";
}

$query2="create table Product(Product_Name varchar(100),Product_Description varchar(225),Price INT,Product_Quantity INT)";
if(mysqli_query($con,$query2))
{
echo "Table created successfully<br>";
}
*/


if(isset($_POST['submit']))
{
$name=$_POST['business'];
$address=$_POST['address'];
$email=$_POST['email'];
$aadhar=$_POST['aadhar'];
$phone=$_POST['phone'];
$contacts=$_POST['contacts'];
$bname=$_POST['business_name'];
$categories=$_POST['categories'];
$description=$_POST['product_description'];
$pricing=$_POST['pricing'];
$query3="insert into Personal_Information values('$name','$address','$email',$aadhar,$phone,$contacts)";
if(mysqli_query($con,$query3))
{
echo "Values inserted in Personal_Table successfully<br>";
}
$query4="insert into Professional_Information values('$bname','$categories','$description',$pricing)";
if(mysqli_query($con,$query4))
{
echo "Values inserted in Professional_Table successfully<br>";
}

 while(isset($_POST['add']))
 {
    

    
//     if ($_SERVER["REQUEST_METHOD"] === "POST") {
//         $productCount = isset($_POST["productCount"]) ? (int)$_POST["productCount"] : 0;
    
//         for ($i = 0; $i < $productCount; $i++) {
//             $productName = $_POST["product_name"][$i];
//             $productDescription = $_POST["product_descript"][$i];
//             $productPrice = $_POST["product_price"][$i];
//             $productQuantity = $_POST["product_quantity"][$i];
    
//             // Process and store the data as needed
//             $query5 = "INSERT INTO Product VALUES ('$productName', '$productDescription', $productPrice, $productQuantity)";
//             if (mysqli_query($con, $query5)) {
//                 echo "Values inserted in Product_Table successfully<br>";
//             }
//         }
//     } else {
//         // Invalid request
//         echo json_encode(["status" => "error", "message" => "Invalid request"]);
//     }
    
    


    $pname=$_POST['product_name'];
    $pdescript=$_POST['product_descript'];
    $price=$_POST['product_price'];
    $quantity=$_POST['product_quantity'];
    $query5="insert into Product values('$pname','$pdescript',$price,$quantity)";
    if(mysqli_query($con,$query5))
    {
    echo "Values inserted in Product_Table successfully<br>";
    }
}








}
?>
