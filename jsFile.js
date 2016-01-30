/**
 * Created by ilker on 30.01.2016.
 */
(function() { // Sayfa Yüklenince çalışsın

    var sarkilariGetir = new XMLHttpRequest(),
        paragrafSayisi = 4,
        paragrafSatirsayisi = 4,
        song_file = "./song.txt",
        satirbasinaMinumumKelime = 3,
        satirbasinaMaximumKelime = 6,
        sarkiUret = document.getElementById("sarkiUret");
        kelimeler = [],
        sarkilar = "",
        satirlar = "";

    var  sayiUret =function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Şarkı sözlerini yükle
    sarkilariGetir.open('GET', "song.txt", false);
    sarkilariGetir.send();

    sarkilar = sarkilariGetir.responseText;

    satirlar = sarkilar.split("\n");

    for (satir in satirlar) {
        satirlar[satir] = satirlar[satir].replace("\n", "");
        satirlar[satir] = satirlar[satir].replace("-----", "");
        satirdakiKelimeler = satirlar[satir].split(" ");

        for (sKelimeleri in satirdakiKelimeler) {
            satirdakiKelimeler[sKelimeleri] = satirdakiKelimeler[sKelimeleri].replace("\n", "");
            kelimeler.push(satirdakiKelimeler[sKelimeleri].toLowerCase());
        }
    }
    var satirUret = function() {
        kelimeSayisi = sayiUret(satirbasinaMinumumKelime, satirbasinaMaximumKelime);
        sarkiSatiri = "";
        for (i = 0; i < kelimeSayisi; i++) {
            rastgeleSayi = sayiUret(0, kelimeler.length - 1);
            sarkiSatiri += kelimeler[rastgeleSayi] + " ";
        }
        sarkiSatiri = sarkiSatiri.charAt(0).toUpperCase() + sarkiSatiri.slice(1);
        return sarkiSatiri
    }


    var paragrafUret = function() {
        var paragraf = "";
        for (x = 0; x < paragrafSatirsayisi; x++) {
            paragraf += satirUret() + "<br>";
        }
        return paragraf;
    }

    var sarkiUret = function() {
        var sarki = "";
        for (y = 0; y < paragrafSayisi; y++) {
            sarki += paragrafUret() + "<br>";
        }
        console.log(sarki);
        document.getElementById('EfsaneSarki').innerHTML = sarki;
    }

    var sarkiBasligiUret = function() {
        title = kelimeler[sayiUret(0, kelimeler.length - 1)] + " " + kelimeler[sayiUret(0, kelimeler.length - 1)] + " " + kelimeler[sayiUret(0, kelimeler.length - 1)];
        document.getElementById('efsaneSarkiBasligi').innerHTML = title.toUpperCase();
    }

    sarkiBasligiUret();
    sarkiUret();

    var btn = document.getElementById("sarkiUret");
    btn.addEventListener("click", function(){
        paragrafSayisi = document.getElementById("paragrafSayisi").value;
        paragrafSatirsayisi =  document.getElementById("kelimeSayisi").value;
        sarkiBasligiUret();
        sarkiUret();
    })




})();