document.getElementById("proses").addEventListener('click', tampilkanHasil)

function tampilkanHasil() {
	// input berat kuah + panci
	let hc = parseInt(document.getElementById("hc").value);
	let sc = parseInt(document.getElementById("sc").value);
	let tc = parseInt(document.getElementById("tc").value);
	let ty = parseInt(document.getElementById("ty").value);
	let pc = parseInt(document.getElementById("pc").value);
	let ks = parseInt(document.getElementById("ks").value);
	let lv = parseInt(document.getElementById("lv").value);
	let cy = parseInt(document.getElementById("cy").value);

	//  berat panci
	let b_wadah_hc = parseInt(document.getElementById("b_wadah_hc").value);
	let b_wadah_sc = parseInt(document.getElementById("b_wadah_sc").value);
	let b_wadah_tc = parseInt(document.getElementById("b_wadah_tc").value);
	let b_wadah_ty = parseInt(document.getElementById("b_wadah_ty").value);
	let b_wadah_pc = parseInt(document.getElementById("b_wadah_pc").value);
	let b_wadah_ks = parseInt(document.getElementById("b_wadah_ks").value);
	let b_wadah_lv = parseInt(document.getElementById("b_wadah_lv").value);
	let b_wadah_cy = parseInt(document.getElementById("b_wadah_cy").value);

	// takaran kuah perporsi
	let kuah_perporsi_hc = parseInt(document.getElementById("kuah_perporsi_hc").value);
	let kuah_perporsi_sc = parseInt(document.getElementById("kuah_perporsi_sc").value);
	let kuah_perporsi_tc = parseInt(document.getElementById("kuah_perporsi_tc").value);
	let kuah_perporsi_ty = parseInt(document.getElementById("kuah_perporsi_ty").value);
	let kuah_perporsi_pc = parseInt(document.getElementById("kuah_perporsi_pc").value);
	let kuah_perporsi_ks = parseInt(document.getElementById("kuah_perporsi_ks").value);
	let kuah_perporsi_lv = parseInt(document.getElementById("kuah_perporsi_lv").value);
	let kuah_perporsi_cy = parseInt(document.getElementById("kuah_perporsi_cy").value);

	// proses kalkulasi
	document.getElementById("hasil_hc").innerHTML = hc - b_wadah_hc;
	document.getElementById("hasil_hc2").innerHTML = hc - b_wadah_hc;
	document.getElementById("hasil_sc").innerHTML = sc - b_wadah_sc;
	document.getElementById("hasil_sc2").innerHTML = sc - b_wadah_sc;
	document.getElementById("hasil_tc").innerHTML = tc - b_wadah_tc;
	document.getElementById("hasil_tc2").innerHTML = tc - b_wadah_tc;
	document.getElementById("hasil_ty").innerHTML = ty - b_wadah_ty;
	document.getElementById("hasil_ty2").innerHTML = ty - b_wadah_ty;
	document.getElementById("hasil_pc").innerHTML = pc - b_wadah_pc;
	document.getElementById("hasil_pc2").innerHTML = pc - b_wadah_pc;
	document.getElementById("hasil_ks").innerHTML = ks - b_wadah_ks;
	document.getElementById("hasil_ks2").innerHTML = ks - b_wadah_ks;
	document.getElementById("hasil_lv").innerHTML = lv - b_wadah_lv;
	document.getElementById("hasil_lv2").innerHTML = lv - b_wadah_lv;
	document.getElementById("hasil_cy").innerHTML = cy - b_wadah_cy;
	document.getElementById("hasil_cy2").innerHTML = cy - b_wadah_cy;

	// proses kalkulasi total

	document.getElementById("total_hc").innerHTML = Math.floor(( hc - b_wadah_hc ) / kuah_perporsi_hc);
	document.getElementById("total_sc").innerHTML = Math.floor(( sc - b_wadah_sc ) / kuah_perporsi_sc);
	document.getElementById("total_tc").innerHTML = Math.floor(( tc - b_wadah_tc ) / kuah_perporsi_tc);
	document.getElementById("total_ty").innerHTML = Math.floor(( ty - b_wadah_ty ) / kuah_perporsi_ty);
	document.getElementById("total_pc").innerHTML = Math.floor(( pc - b_wadah_pc ) / kuah_perporsi_pc);
	document.getElementById("total_ks").innerHTML = Math.floor(( ks - b_wadah_ks ) / kuah_perporsi_ks);
	document.getElementById("total_lv").innerHTML = Math.floor(( lv - b_wadah_lv ) / kuah_perporsi_lv);
	document.getElementById("total_cy").innerHTML = Math.floor(( cy - b_wadah_cy ) / kuah_perporsi_cy);
}