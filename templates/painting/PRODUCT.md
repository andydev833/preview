# 外壁塗装会社の営業提案テンプレート
<!-- impeccable:product-schema 1 -->
## Platform
web
## Users
ユーザーは2つの営業先CSVをもとに外壁塗装会社へ提案する3種類のWebテンプレートを必要としている。ページ閲覧者は地域の住宅所有者を想定（制作上の仮定）。
## Product Purpose
SANKOU掲載デザインを参考に、異なる3案を比較できる静的HTMLの営業サンプルを作る。
## Operating Context
既存プロジェクトはPythonで会社別の静的HTMLを生成している。同方式を採用する。対象は業種に外壁塗装を含む会社。自動車板金塗装は含めない。
## Capabilities and Constraints
会社名・地域・電話・MapsはCSVから取得し、業務改善メモや営業スコアは顧客向けページに表示しない。未確認の実績・無料対応・施工体制・価格・保証を捏造しない。サンプルバナーとnoindexを全ページに維持。LINEやフォームの接続先は未提供。
## Evidence on Hand
/Users/eisuke/Downloads/kansai_hp_leads_100.csv と osaka_hp_sales_priority_100.csv。実際の施工写真は未提供。参考元は https://sankoudesign.com/ 。画像は独自生成しイメージと明示する。
## Scope assumption
既存リフォーム事例と同様、対象24社×3案を生成する。確認質問は送付済み、回答があれば反映する。
