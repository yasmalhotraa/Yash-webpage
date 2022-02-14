const shoename=["Shoe01","Shoe02","Shoe03","Shoe04","Shoe05","Shoe06","Shoe07","Shoe08","Shoe09"];
const shoeprice=[2000,3000,1000,1500,6500,8900,4566,1111,2345];
var noofproduct = 0;
const shoes =[
	{
		image: "https://www.pngall.com/wp-content/uploads/2016/03/Shoes-Free-Download-PNG.png",
		name: "Adidas Superstar",
		price: 2000,
		star: 3.0,
		time: "15 Monday"
	},
	{
		image: "https://purepng.com/public/uploads/large/purepng.com-running-shoesrunning-shoesrunningshoessportingphysical-activitiesstyle-17015281813101tvat.png",
		name: "Adidas sports",
		price: 2500,
		star: 4.5,
		time: "21 Thursday"
	},
	{
		image: "https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png",
		name: "Nike Joyride",
		price: 1500,
		star: 3.5,
		time: "19 Saturday"
	},
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Shoes_sport-right.png",
		name: "Balenciaga",
		price: 8000,
		star: 5.0,
		time: "9 Tuesday"
	},
	{
		image: "http://pngimg.com/uploads/men_shoes/men_shoes_PNG7496.png",
		name: "Office Shoes",
		price: 699,
		star: 3.0,
		time: "24 sunday"
	},
	{
		image: "https://www.pngall.com/wp-content/uploads/5/Heels-Transparent.png",
		name: "Red Heels",
		price: 9999,
		star: 5.0,
		time: "7 monday"
	},
	{
		image: "https://i.ibb.co/BcBNQV6/1.png",
		name: "Louis Vuitton",
		price: 12000,
		star: 4.0,
		time: "22 monday"
	},
	{
		image: "https://i.ibb.co/hm4w0SS/2.png",
		name: "Campus",
		price: 999,
		star: 2.0,
		time: "14 Wednesday"
	},
	{
		image: "https://i.ibb.co/TbcNzSR/3.png",
		name: "Nike AirMax",
		price: 7599,
		star: 4.5,
		time: "27 Sunday"
	},
	{
		image: "https://www.freepnglogos.com/uploads/sandal-png/sandal-png-images-transparent-download-pngmartm-5.png",
		name: "Sandle",
		price: 6969,
		star: 3.0,
		time: "26 Saturday"
	},
	{
		image: "https://www.seekpng.com/png/full/122-1221041_leather-sandals-png-image-leather-sandals-png.png",
		name: "Leater Slipper",
		price: 499,
		star: 1.0,
		time: "15 Thursday"
	},
	{
		image: "https://www.pngmart.com/files/6/Sandal-PNG-Transparent-1.png",
		name: "Sports Sandle",
		price: 420,
		star: 2.5,
		time: "16 Friday"
	}
];


$.each(shoes, function (i) {
    var templateString = `
	<div class="col-md-4">
		<div class="card mb-4 shadow-sm" >
			<img id="shoeimg" src="`+shoes[i].image+`" class="card-img-top" width="240px" height="150px">
			<div class="card-body">
			<div class="justify-content-between align-items-center">
				<hr>
				<div class="row">
					<div class="col"><h5 id="shoename" class="card-img-header">`+shoes[i].name+`</h5><br></div>
					<div class="col"><h6 id="shoestar">★`+shoes[i].star+`.0</h6></div>
				</div>
				<div class="row">
					<div class="col"><h5 id="shoeprice" class="card-img-sidebar">₹`+shoes[i].price+`.00</h5><br></div>
				</div>
				<div class="row">
					<div class="col"><h6 id="shoetime" class="card-img-footer text-muted">Delivery by: `+shoes[i].time+`</h6></div>
				</div>
			</div>
			</div>
		</div>
	</div>
	`;
    $('#repeat').append(templateString);
});


$("#pricelh").click(function(){
	shoes.sort((a, b) => {
		return b.price - a.price;
	});
	viewonly();
});
$("#nameaz").click(function(){
	shoes.sort((a, b) => {
		let fa = a.name.toLowerCase(),
			fb = b.name.toLowerCase();
	
		if (fa < fb) {
			return -1;
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	});
	viewonly();
});
$("#deltime").click(function(){
	shoes.sort((a, b) => {
		let fa = a.time.toLowerCase(),
			fb = b.time.toLowerCase();
	
		if (fa < fb) {
			return -1;
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	});
	viewonly();
});
$("#star51").click(function(){
	shoes.sort((a, b) => {
		return b.star - a.star;
	});
	viewonly();
});
function viewonly(){
	noofproduct = shoes.length;
	$('#repeat').empty();
	$("#totalproduct").text("Products "+noofproduct);
	$.each(shoes, function (i) {	
		templateString = `
		<div class="col-md-4">
			<div class="card mb-4 shadow-sm" >
				<img id="shoeimg" src="`+shoes[i].image+`" class="card-img-top" width="240px" height="150px">
				<div class="card-body">
				<div class="justify-content-between align-items-center">
					<hr>
					<div class="row">
						<div class="col"><h5 id="shoename" class="card-img-header">`+shoes[i].name+`</h5><br></div>
						<div class="col"><h6 id="shoestar">★`+shoes[i].star+`.0</h6></div>
					</div>
					<div class="row">
						<div class="col"><h5 id="shoeprice" class="card-img-sidebar">₹`+shoes[i].price+`.00</h5><br></div>
					</div>
					<div class="row">
						<div class="col"><h6 id="shoetime" class="card-img-footer text-muted">Delivery by: `+shoes[i].time+`</h6></div>
					</div>
				</div>
				</div>
			</div>
		</div>
			`;
		$('#repeat').append(templateString);
	});
}


var newstar=[];
$("#star5").click(function(){
	newstar=[];
	for(var i=0;i<shoes.length;i++){
		if (shoes[i].star==5) {
			newstar.push(shoes[i]);
		}
	}
	starviewonly();
});
$("#star4").click(function(){
	newstar=[]
	for(var i=0;i<shoes.length;i++){
		if (shoes[i].star==4) {
			newstar.push(shoes[i]);
		}
	}
	starviewonly();
});
$("#star3").click(function(){
	newstar=[]
	for(var i=0;i<shoes.length;i++){
		if (shoes[i].star==3) {
			newstar.push(shoes[i]);
		}
	}
	starviewonly();
});
$("#star2").click(function(){
	newstar=[];
	for(var i=0;i<shoes.length;i++){
		if (shoes[i].star==2) {
			newstar.push(shoes[i]);
		}
	}
	starviewonly();
});
$("#star1").click(function(){
	newstar=[];
	for(var i=0;i<shoes.length;i++){
		if (shoes[i].star==1) {
			newstar.push(shoes[i]);
		}
	}
	starviewonly();
});
function starviewonly(){
	noofproduct = newstar.length;
	$('#repeat').empty();
	$("#totalproduct").text("Products "+noofproduct);
	$.each(newstar, function (i) {	
		templateString = `
		<div class="col-md-4">
			<div class="card mb-4 shadow-sm" >
				<img id="shoeimg" src="`+newstar[i].image+`" class="card-img-top" width="240px" height="150px">
				<div class="card-body">
				<div class="justify-content-between align-items-center">
					<hr>
					<div class="row">
						<div class="col"><h5 id="shoename" class="card-img-header">`+newstar[i].name+`</h5><br></div>
						<div class="col"><h6 id="shoestar">★`+newstar[i].star+`.0</h6></div>
					</div>
					<div class="row">
						<div class="col"><h5 id="shoeprice" class="card-img-sidebar">₹`+newstar[i].price+`.00</h5><br></div>
					</div>
					<div class="row">
						<div class="col"><h6 id="shoetime" class="card-img-footer text-muted">Delivery by: `+newstar[i].time+`</h6></div>
					</div>
				</div>
				</div>
			</div>
		</div>
			`;
		$('#repeat').append(templateString);
	});
}