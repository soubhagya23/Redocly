import Categories from './API_Categories.json';
import Products from './API_Products.json';
import APIs from './API_listing.json';


export default function APIList() {
	let SelProd = Products.filter((SelCat) => SelCat.CatCode == "KYC");
	let SelAPI = APIs.filter((SelAPI) => { return SelAPI.CatCode === "Collection" && SelAPI.ProdCode === "Virt_AC_API_Plan";}); 
	
	return 	(
			<>
			<div>
				{Categories.map((Cat) => (
					<div>
					<p>{Cat.CatDisplayName}</p>
					</div>
					)
				)
				}
			</div>
			<div>
				{SelProd.map((SelCat) => (
					<div>
					<p>{SelCat.CatCode}</p>
					<p>{SelCat.ProdDisplayName}</p>
					</div>
					)
				)
				}
				
			</div>
			<div>
				{SelAPI.map((SelAPI) => (
					<div>
					<p>{SelAPI.CatCode}</p>
					<p>{SelAPI.ProdCode}</p>
					<p>{SelAPI.APIDisplayName}</p>
					</div>
					)
				)
				}
				
			</div>
			</>
	);
}		  



