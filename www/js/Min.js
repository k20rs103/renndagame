//
//  tapGame.js
//  MonacaFirstApp
//
//  Created by Natsumo Ikeda on 2016/07/01.
//  Copyright 2017 FUJITSU CLOUD TECHNOLOGIES LIMITED All Rights Reserved.
//

// 「最低スコア見る」ボタン押下時の処理
function toMin() {
  // データ取得
  checkMin();
  // 最低スコア画面へ遷移
  window.location.href = "#Min-page";
}

// 【mBaaS】保存したデータの検索と取得
function checkMin() {
  // 保存先クラスを作成
  var Min = ncmb.DataStore("GameScore");
  // scoreの昇順でデータ1件を取得するように設定する
  Min.order("score", false)
    .limit(1).fetchAll()
    .then(function (results) {
      // 検索に成功した場合の処理
      console.log("検索に成功しました。");
      // テーブルにデータをセット
      setDataMin(results);
    })
    .catch(function (error) {
      // 検索に失敗した場合の処理
      console.log("検索に失敗しました。エラー:" + error);
    });

  // ******************************************************
}

// テーブルにデータを設定
function setDataMin(arrayMin) {
  var tableMin = document.getElementById("MinTable");
  for (i = 0; i < arrayMin.length; i++) {
    // 名前の設定
    var name = tableMin.rows[i].cells[1];
    name.innerHTML = arrayMin[i].name + "さん";
    // スコアの設定
    var score = tableMin.rows[i].cells[2];
    score.innerHTML = arrayMin[i].score + "連打";
  }
}