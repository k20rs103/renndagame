//
//  tapGame.js
//  MonacaFirstApp
//
//  Created by Natsumo Ikeda on 2016/07/01.
//  Copyright 2017 FUJITSU CLOUD TECHNOLOGIES LIMITED All Rights Reserved.
//

// 「最高スコア見る」ボタン押下時の処理
function toMax() {
  // データ取得
  checkMax();
  // 最高スコア画面へ遷移
  window.location.href = "#Max-page";
}

// 【mBaaS】保存したデータの検索と取得
function checkMax() {
  // 保存先クラスを作成
  var Max = ncmb.DataStore("GameScore");
  // scoreの降順でデータ1件を取得するように設定する
  Max.order("score", true)
    .limit(1).fetchAll()
    .then(function (results) {
      // 検索に成功した場合の処理
      console.log("検索に成功しました。");
      // テーブルにデータをセット
      setDataMax(results);
    })
    .catch(function (error) {
      // 検索に失敗した場合の処理
      console.log("検索に失敗しました。エラー:" + error);
    });

  // ******************************************************
}

// テーブルにデータを設定
function setDataMax(arrayMax) {
  var tableMax = document.getElementById("MaxTable");
  for (i = 0; i < arrayMax.length; i++) {
    // 名前の設定
    var name = tableMax.rows[i].cells[1];
    name.innerHTML = arrayMax[i].name + "さん";
    // スコアの設定
    var score = tableMax.rows[i].cells[2];
    score.innerHTML = arrayMax[i].score + "連打";
  }
}