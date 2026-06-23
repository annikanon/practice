const roadmap = [
  {
    title: "数学・統計",
    body: "線形代数、微分、確率分布、最尤推定、情報量、エントロピー、KLダイバージェンスを確認します。"
  },
  {
    title: "最適化",
    body: "勾配降下法、SGD、Momentum、AdaGrad、RMSProp、Adam、学習率スケジューリングを整理します。"
  },
  {
    title: "ニューラルネット基礎",
    body: "活性化関数、誤差逆伝播、初期化、正則化、BatchNorm系、Dropout系を重点的に扱います。"
  },
  {
    title: "主要アーキテクチャ",
    body: "CNN、RNN、LSTM、GRU、Attention、Transformer、AutoEncoder、VAE、GANを横断します。"
  },
  {
    title: "実装・評価",
    body: "NumPy実装、PyTorch風の考え方、評価指標、データ分割、過学習検知、推論時の挙動を確認します。"
  }
];

const concepts = [
  { category: "学習パラダイム", title: "教師あり学習", body: "入力Xと正解ラベルyの組から写像を学び、未知データの回帰値やクラスを予測します。", code: "model.fit(X_train, y_train)\npred = model.predict(X_test)" },
  { category: "学習パラダイム", title: "教師なし学習", body: "正解ラベルを使わず、データの構造、クラスタ、低次元表現、異常を発見します。", code: "clusters = kmeans(X)\nembedding = pca(X)" },
  { category: "学習パラダイム", title: "半教師あり学習", body: "少量のラベル付きデータと大量の未ラベルデータを組み合わせます。Pseudo Labelなどが代表例です。", code: "pseudo_y = model.predict(X_unlabeled)\nX_all = np.r_[X_labeled, X_unlabeled]" },
  { category: "学習パラダイム", title: "自己教師あり学習", body: "データ自身から監督信号を作り、事前学習で汎用表現を獲得します。Contrastive LearningやMasked Modelingが代表例です。", code: "loss = contrastive_loss(encoder(view1), encoder(view2))" },
  { category: "学習パラダイム", title: "強化学習", body: "Agentが環境と相互作用し、累積報酬を最大化する方策を学びます。状態・行動・報酬・遷移で考えます。", code: "Q[s, a] += alpha * (r + gamma * Q[next_s].max() - Q[s, a])" },
  { category: "古典モデル", title: "線形回帰", body: "説明変数の線形結合で連続値を予測します。最小二乗法、残差、決定係数が重要です。", code: "w = np.linalg.pinv(X.T @ X) @ X.T @ y" },
  { category: "古典モデル", title: "ロジスティック回帰", body: "線形結合をsigmoidへ通し、二値クラスの確率を推定する線形分類器です。", code: "prob = 1 / (1 + np.exp(-(X @ w + b)))" },
  { category: "古典モデル", title: "Support Vector Machine", body: "クラス間のマージンを最大化する分類器です。Kernel Trickで非線形境界を扱えます。", code: "margin = y * (X @ w + b)\nhinge = np.maximum(0, 1 - margin)" },
  { category: "古典モデル", title: "Decision Tree", body: "特徴量の閾値でデータを再帰分割します。Gini不純度や情報利得で分割を選びます。", code: "gini = 1 - np.sum(class_prob ** 2)" },
  { category: "古典モデル", title: "Random Forest", body: "Bootstrap標本と特徴量サブサンプリングで複数の決定木を作り、予測を平均・多数決します。", code: "prediction = np.mean([tree.predict(X) for tree in trees], axis=0)" },
  { category: "古典モデル", title: "k-Nearest Neighbors", body: "近いk個の訓練標本を探し、多数決または平均で予測するinstance-based学習です。", code: "nearest = np.argsort(np.linalg.norm(X_train - x, axis=1))[:k]" },
  { category: "古典モデル", title: "Naive Bayes", body: "特徴量がクラス条件付きで独立と仮定し、ベイズの定理で事後確率を計算します。", code: "log_posterior = log_prior + np.sum(log_likelihood, axis=1)" },
  { category: "古典モデル", title: "Gradient Boosting", body: "弱学習器を逐次追加し、前段モデルの残差や損失勾配を補正します。", code: "prediction += learning_rate * weak_learner.predict(X)" },
  { category: "教師なし", title: "k-means", body: "各点を最も近い重心へ割り当て、重心を更新する操作を反復するクラスタリングです。", code: "labels = distances.argmin(axis=1)\ncenters = np.array([X[labels == k].mean(0) for k in range(K)])" },
  { category: "教師なし", title: "Principal Component Analysis", body: "分散が最大になる直交方向へデータを射影する線形次元削減です。", code: "U, S, Vt = np.linalg.svd(X - X.mean(0), full_matrices=False)\nZ = (X - X.mean(0)) @ Vt[:k].T" },
  { category: "NumPy実践", title: "reshapeとtranspose", body: "要素数を保ってshapeを変更し、transposeで軸順序を入れ替えます。", code: "x = np.arange(24).reshape(2, 3, 4)\ny = x.transpose(0, 2, 1)" },
  { category: "NumPy実践", title: "concatenateとstack", body: "concatenateは既存軸で連結し、stackは新しい軸を追加して積み重ねます。", code: "a = np.concatenate([x, y], axis=0)\nb = np.stack([x, y], axis=0)" },
  { category: "NumPy実践", title: "whereとargsort", body: "whereは条件選択、argsortは並べ替え後のindexを返します。ランキングやTop-k抽出に使います。", code: "clean = np.where(x > 0, x, 0)\ntopk = np.argsort(score)[-k:][::-1]" },
  { category: "Pandas実践", title: "pivot_table", body: "カテゴリを行・列へ配置し、値を集約してクロス集計表を作ります。", code: "table = df.pivot_table(index='class', columns='month', values='score', aggfunc='mean')" },
  { category: "Pandas実践", title: "rollingと時系列集計", body: "移動窓で平均・分散などを計算します。時系列では未来データを窓に含めないことが重要です。", code: "df['ma7'] = df['value'].rolling(7, min_periods=1).mean()" },
  { category: "確率分布", title: "ポアソン分布", body: "一定区間に独立に発生する事象の回数を表します。平均と分散はいずれもλです。", code: "count = np.random.poisson(lam=3.0, size=1000)" },
  { category: "確率分布", title: "指数分布", body: "ポアソン過程で次の事象までの待ち時間を表します。無記憶性を持ちます。", code: "wait = np.random.exponential(scale=1/lambda_, size=1000)" },
  { category: "確率分布", title: "一様分布", body: "指定区間内の全ての値が同じ密度を持つ分布です。乱数生成や初期化の基礎です。", code: "x = np.random.uniform(low=a, high=b, size=1000)" },
  { category: "確率分布", title: "ベータ分布", body: "0から1の確率を表す連続分布で、ベルヌーイ確率の事前分布として使われます。", code: "p = np.random.beta(alpha, beta, size=1000)" },
  { category: "確率分布", title: "ガンマ分布", body: "正の連続値を表し、待ち時間や分散パラメータの事前分布に使われます。", code: "x = np.random.gamma(shape=k, scale=theta, size=1000)" },
  { category: "統計", title: "t分布とカイ二乗分布", body: "t分布は母分散未知の平均推定、カイ二乗分布は分散推定や適合度検定に使われます。", code: "t = np.random.standard_t(df=10, size=1000)\nchi2 = np.random.chisquare(df=10, size=1000)" },
  {
    category: "統計",
    title: "ヒストグラムと分布形状",
    body: "連続値を区間に分け、度数を可視化します。歪度、多峰性、外れ値、ビン幅の影響を読み取ります。",
    code: "counts, edges = np.histogram(x, bins=10)"
  },
  {
    category: "統計",
    title: "箱ひげ図と四分位範囲",
    body: "中央値、四分位点、IQR、外れ値候補を可視化します。分布の中心とばらつきを比較できます。",
    code: "q1, median, q3 = np.percentile(x, [25, 50, 75])\niqr = q3 - q1"
  },
  {
    category: "前処理",
    title: "標準化と正規化",
    body: "標準化は平均0・標準偏差1へ変換し、Min-Max正規化は指定範囲へ線形変換します。",
    code: "z = (x - train_mean) / train_std\nx01 = (x - train_min) / (train_max - train_min)"
  },
  {
    category: "前処理",
    title: "カテゴリ変数エンコーディング",
    body: "One-Hot、Ordinal、Target Encodingなどでカテゴリを数値化します。順序の有無とリークに注意します。",
    code: "encoded = pd.get_dummies(df, columns=['city'], dtype=float)"
  },
  {
    category: "前処理",
    title: "データ分割とリーク防止",
    body: "訓練・検証・テストを目的別に分け、前処理の統計量を訓練データだけで推定します。",
    code: "mean = X_train.mean(axis=0)\nX_valid = (X_valid - mean) / std"
  },
  {
    category: "深層学習技術",
    title: "転移学習とFine-tuning",
    body: "事前学習済みモデルの表現を利用し、下流タスクへ適応します。凍結範囲と学習率を調整します。",
    code: "for p in backbone.parameters(): p.requires_grad = False"
  },
  {
    category: "深層学習技術",
    title: "Mixed Precision Training",
    body: "FP16/BF16とFP32を使い分け、速度とメモリ効率を改善します。FP16ではLoss Scalingが重要です。",
    code: "with torch.autocast('cuda', dtype=torch.float16):\n    loss = criterion(model(x), y)"
  },
  {
    category: "深層学習技術",
    title: "Knowledge Distillation",
    body: "Teacherのsoft targetをStudentへ学習させ、小型モデルへ知識を移します。温度Tで分布を滑らかにします。",
    code: "soft_loss = kl_div(log_softmax(s/T), softmax(t/T)) * T**2"
  },
  {
    category: "深層学習技術",
    title: "Data Augmentation",
    body: "ラベルを保つ変換で訓練データの多様性を増やします。画像、音声、文章で変換方法が異なります。",
    code: "augmented = np.flip(image, axis=1).copy()"
  },
  {
    category: "Python",
    title: "スライス",
    body: "シーケンスやNumPy配列から範囲を切り出す構文です。start:stop:stepと、ビュー・コピーの違いを理解します。",
    code: "x = np.arange(10)\npart = x[2:8:2]\nreversed_x = x[::-1]"
  },
  {
    category: "NumPy",
    title: "ブロードキャスト",
    body: "shapeが異なる配列同士を、末尾の次元から互換性を判定して暗黙に拡張する仕組みです。",
    code: "x = np.arange(6).reshape(2, 3)\nbias = np.array([10, 20, 30])\ny = x + bias"
  },
  {
    category: "NumPy",
    title: "np.dotと行列積",
    body: "内積・行列積を計算します。1次元、2次元、高次元で挙動が変わるため、@やnp.matmulとの違いも確認します。",
    code: "y = np.dot(X, W)\ny_same = X @ W"
  },
  {
    category: "NumPy",
    title: "axisとkeepdims",
    body: "集約する軸を指定する考え方です。keepdims=Trueは次元を残し、ブロードキャストしやすくします。",
    code: "mean = x.mean(axis=0, keepdims=True)\nx_centered = x - mean"
  },
  {
    category: "NumPy",
    title: "Boolean Indexing",
    body: "条件式から真偽値マスクを作り、条件を満たす要素や行だけを抽出・更新します。",
    code: "mask = x > 0\npositive = x[mask]\nx[mask] = 1"
  },
  {
    category: "Pandas",
    title: "DataFrameとSeries",
    body: "Seriesはラベル付き1次元データ、DataFrameは列ごとに型を持てる表形式データです。",
    code: "df = pd.DataFrame({'x': [1, 2], 'y': [3, 4]})\ncolumn = df['x']"
  },
  {
    category: "Pandas",
    title: "groupbyと集約",
    body: "カテゴリごとにデータを分割し、平均・合計・件数などを集約するsplit-apply-combine操作です。",
    code: "summary = df.groupby('class')['score'].agg(['mean', 'std', 'count'])"
  },
  {
    category: "Pandas",
    title: "mergeとjoin",
    body: "キー列やインデックスを使って複数の表を結合します。inner、left、right、outerの違いが重要です。",
    code: "result = pd.merge(left, right, on='id', how='left')"
  },
  {
    category: "Pandas",
    title: "欠損値処理",
    body: "NaNを検出し、削除・補完・フラグ化します。訓練データだけで補完値を推定してリークを防ぎます。",
    code: "median = train['age'].median()\ntrain['age'] = train['age'].fillna(median)"
  },
  {
    category: "統計",
    title: "期待値と分散",
    body: "期待値は確率変数の平均的位置、分散は期待値からのばらつきの大きさを表します。",
    code: "mean = np.sum(values * probs)\nvar = np.sum((values - mean)**2 * probs)"
  },
  {
    category: "統計",
    title: "共分散と相関係数",
    body: "共分散は2変数の同時変動、相関係数は共分散を標準偏差で正規化した尺度です。",
    code: "cov = np.cov(x, y, ddof=1)[0, 1]\ncorr = np.corrcoef(x, y)[0, 1]"
  },
  {
    category: "確率分布",
    title: "ベルヌーイ分布と二項分布",
    body: "ベルヌーイ分布は1回の成功・失敗、二項分布は独立なベルヌーイ試行の成功回数を表します。",
    code: "samples = np.random.binomial(n=1, p=0.7, size=1000)\ncounts = np.random.binomial(n=10, p=0.7, size=1000)"
  },
  {
    category: "確率分布",
    title: "正規分布",
    body: "平均と分散で形が決まる連続分布です。標準化、中心極限定理、重み初期化と深く関係します。",
    code: "x = np.random.normal(loc=0.0, scale=1.0, size=1000)\nz = (x - x.mean()) / x.std()"
  },
  {
    category: "統計",
    title: "ベイズの定理",
    body: "事前確率と尤度から事後確率を更新する規則です。条件付き確率の向きを反転させます。",
    code: "posterior = likelihood * prior / evidence"
  },
  {
    category: "統計",
    title: "中心極限定理",
    body: "独立同分布な標本の平均は、標本数が大きいと元分布によらず正規分布へ近づきます。",
    code: "sample_means = [np.mean(np.random.exponential(1, 50)) for _ in range(5000)]"
  },
  {
    category: "数学",
    title: "偏微分と勾配",
    body: "多変数関数で各変数方向の変化率を並べたものが勾配です。損失を最も増やす方向を表すため、最小化では逆方向へ進みます。",
    code: "grad_w = np.dot(x.T, (y_pred - y)) / len(x)\nw = w - lr * grad_w"
  },
  {
    category: "数学",
    title: "連鎖律",
    body: "合成関数の微分を局所的な微分の積として計算する規則です。誤差逆伝播は計算グラフ上で連鎖律を効率よく適用します。",
    code: "dz_dx = dz_dy * dy_dx"
  },
  {
    category: "数学",
    title: "エントロピー",
    body: "確率分布の不確実性を表します。分類では正解分布と予測分布の差を測る交差エントロピーに発展します。",
    code: "entropy = -np.sum(p * np.log(p + 1e-7))"
  },
  {
    category: "数学",
    title: "KLダイバージェンス",
    body: "分布qが分布pからどれだけずれているかを測る量です。VAEや知識蒸留でも重要です。",
    code: "kl = np.sum(p * (np.log(p + 1e-7) - np.log(q + 1e-7)))"
  },
  {
    category: "数学",
    title: "最尤推定",
    body: "観測データが得られる確率を最大化するパラメータを選ぶ考え方です。負の対数尤度を最小化する形で実装されます。",
    code: "nll = -np.sum(np.log(model_prob + 1e-7))"
  },
  {
    category: "数学",
    title: "Softmax",
    body: "ロジットを多クラスの確率分布へ変換する関数です。数値安定化のため最大値を引いてから指数を取ります。",
    code: "z = x - np.max(x, axis=-1, keepdims=True)\nprob = np.exp(z) / np.sum(np.exp(z), axis=-1, keepdims=True)"
  },
  {
    category: "数学",
    title: "交差エントロピー",
    body: "分類で使われる代表的な損失です。正解クラスの予測確率が低いほど損失が大きくなります。",
    code: "loss = -np.mean(np.log(prob[np.arange(n), target] + 1e-7))"
  },
  {
    category: "数学",
    title: "誤差逆伝播",
    body: "出力側から入力側へ勾配を伝え、各パラメータの勾配を効率よく求める手法です。連鎖律を計算グラフに適用します。",
    code: "dW = x.T @ dout\ndx = dout @ W.T"
  },
  {
    category: "最適化",
    title: "Batch Gradient Descent",
    body: "全データで勾配を計算して更新します。安定しやすい一方、大規模データでは1更新が重くなります。",
    code: "grad = compute_grad(x_all, y_all)\nw -= lr * grad"
  },
  {
    category: "最適化",
    title: "Stochastic Gradient Descent",
    body: "1件またはミニバッチごとに更新します。ノイズがあるため局所解から抜けやすい場合があります。",
    code: "for xb, yb in loader:\n    grad = compute_grad(xb, yb)\n    w -= lr * grad"
  },
  {
    category: "最適化",
    title: "Momentum",
    body: "過去の勾配方向を速度として蓄積し、谷方向の振動を抑えながら進みます。",
    code: "v = momentum * v - lr * grad\nw = w + v"
  },
  {
    category: "最適化",
    title: "Nesterov Momentum",
    body: "先回りした位置で勾配を見積もるMomentumです。現在位置だけを見るMomentumより早めに減速できます。",
    code: "lookahead = w + momentum * v\ngrad = compute_grad(lookahead)\nv = momentum * v - lr * grad\nw += v"
  },
  {
    category: "最適化",
    title: "AdaGrad",
    body: "過去の二乗勾配の累積で学習率を調整します。頻出特徴の更新が小さくなりますが、学習率が小さくなりすぎることがあります。",
    code: "h += grad * grad\nw -= lr * grad / (np.sqrt(h) + eps)"
  },
  {
    category: "最適化",
    title: "RMSProp",
    body: "二乗勾配の指数移動平均を使います。AdaGradの学習率が単調に小さくなる問題を緩和します。",
    code: "h = rho * h + (1 - rho) * grad**2\nw -= lr * grad / (np.sqrt(h) + eps)"
  },
  {
    category: "最適化",
    title: "Adam",
    body: "勾配の一次モーメントと二次モーメントを使い、バイアス補正して更新します。",
    code: "m = b1 * m + (1 - b1) * grad\nv = b2 * v + (1 - b2) * grad**2\nw -= lr * m_hat / (np.sqrt(v_hat) + eps)"
  },
  {
    category: "最適化",
    title: "Gradient Clipping",
    body: "勾配ノルムが閾値を超えたときにスケールを抑え、勾配爆発を防ぐ手法です。RNNや大規模モデルで重要です。",
    code: "grad = grad * clip_norm / max(clip_norm, np.linalg.norm(grad))"
  },
  {
    category: "最適化",
    title: "Learning Rate Scheduler",
    body: "学習の進行に応じて学習率を変える仕組みです。Step decay、Cosine、Warmupなどがあります。",
    code: "lr = base_lr * 0.5 * (1 + np.cos(np.pi * step / total_steps))"
  },
  {
    category: "正則化",
    title: "L1正則化",
    body: "重みの絶対値和にペナルティを与えます。重みが0になりやすく、特徴選択的な効果があります。",
    code: "loss = data_loss + lambda_ * np.sum(np.abs(w))"
  },
  {
    category: "正則化",
    title: "L2正則化",
    body: "重みの二乗和にペナルティを与えます。重みの極端な増大を抑え、滑らかなモデルに寄せます。",
    code: "loss = data_loss + lambda_ * np.sum(w ** 2)"
  },
  {
    category: "正則化",
    title: "Weight Decay",
    body: "更新時に重みを直接縮小します。AdamWではL2正則化と分離して扱う点が重要です。",
    code: "w = w - lr * grad - lr * weight_decay * w"
  },
  {
    category: "正規化",
    title: "Batch Normalization",
    body: "ミニバッチ方向の平均・分散で正規化します。学習時と推論時で統計量の扱いが違います。",
    code: "x_hat = (x - batch_mean) / np.sqrt(batch_var + eps)\ny = gamma * x_hat + beta"
  },
  {
    category: "正規化",
    title: "Layer Normalization",
    body: "各サンプル内の特徴次元で正規化します。バッチサイズに依存しにくく、Transformerでよく使われます。",
    code: "mean = x.mean(axis=-1, keepdims=True)\nvar = x.var(axis=-1, keepdims=True)\ny = (x - mean) / np.sqrt(var + eps)"
  },
  {
    category: "正規化",
    title: "Instance Normalization",
    body: "画像ごと・チャネルごとに空間方向を正規化します。スタイル変換などでよく使われます。",
    code: "mean = x.mean(axis=(2, 3), keepdims=True)\nvar = x.var(axis=(2, 3), keepdims=True)"
  },
  {
    category: "正規化",
    title: "Group Normalization",
    body: "チャネルをグループに分けて正規化します。小さいバッチサイズでも安定しやすい手法です。",
    code: "xg = x.reshape(n, groups, c // groups, h, w)\nmean = xg.mean(axis=(2, 3, 4), keepdims=True)"
  },
  {
    category: "正則化",
    title: "Dropout",
    body: "学習時にユニットを確率的に無効化します。推論時に無効化しない実装では学習時にスケール補正します。",
    code: "mask = (np.random.rand(*x.shape) > p) / (1 - p)\ny = x * mask"
  },
  {
    category: "正則化",
    title: "Spatial Dropout",
    body: "CNNで特徴マップ単位にDropoutします。隣接画素の相関が強い通常Dropoutより有効な場合があります。",
    code: "mask = (np.random.rand(n, c, 1, 1) > p) / (1 - p)\ny = x * mask"
  },
  {
    category: "CNN",
    title: "畳み込み",
    body: "局所受容野と重み共有で画像の局所特徴を抽出します。出力サイズ計算は頻出です。",
    code: "out_h = (h + 2 * pad - kernel) // stride + 1"
  },
  {
    category: "CNN",
    title: "Depthwise Separable Convolution",
    body: "チャネルごとの畳み込みと1x1畳み込みに分け、計算量を減らします。MobileNet系で重要です。",
    code: "depthwise_params = k * k * c\npointwise_params = c * out_c"
  },
  {
    category: "CNN",
    title: "Residual Connection",
    body: "入力を出力へ足し合わせるスキップ接続です。深いネットワークの勾配伝播を助けます。",
    code: "y = block(x) + x"
  },
  {
    category: "系列",
    title: "RNN",
    body: "隠れ状態を時刻方向に受け渡す系列モデルです。長期依存では勾配消失・爆発が課題になります。",
    code: "h_t = np.tanh(x_t @ W_x + h_prev @ W_h + b)"
  },
  {
    category: "系列",
    title: "LSTM",
    body: "入力ゲート、忘却ゲート、出力ゲートでセル状態を制御し、長期依存を扱いやすくします。",
    code: "c_t = f_t * c_prev + i_t * g_t\nh_t = o_t * np.tanh(c_t)"
  },
  {
    category: "系列",
    title: "GRU",
    body: "更新ゲートとリセットゲートで隠れ状態を制御します。LSTMよりパラメータが少ないことが多いです。",
    code: "h_t = (1 - z_t) * h_prev + z_t * h_candidate"
  },
  {
    category: "Attention",
    title: "Scaled Dot-Product Attention",
    body: "QK^Tをsqrt(d_k)で割ってsoftmaxし、Vの重み付き和を取ります。Transformerの核です。",
    code: "scores = Q @ K.T / np.sqrt(d_k)\nweights = softmax(scores)\nout = weights @ V"
  },
  {
    category: "Attention",
    title: "Multi-Head Attention",
    body: "複数のヘッドで異なる表現空間のAttentionを計算し、結合して線形変換します。",
    code: "heads = [attention(Q @ Wq[i], K @ Wk[i], V @ Wv[i]) for i in range(h)]\nout = np.concatenate(heads, axis=-1) @ Wo"
  },
  {
    category: "Transformer",
    title: "Positional Encoding",
    body: "Self-Attentionは順序を直接持たないため、位置情報を埋め込みに加えます。",
    code: "pe[:, 0::2] = np.sin(pos / (10000 ** (dims[0::2] / d_model)))\npe[:, 1::2] = np.cos(pos / (10000 ** (dims[1::2] / d_model)))"
  },
  {
    category: "Transformer",
    title: "Pre-LN Transformer",
    body: "サブレイヤーの前にLayerNormを置く構成です。深いTransformerで学習が安定しやすいです。",
    code: "x = x + attention(layer_norm(x))\nx = x + mlp(layer_norm(x))"
  },
  {
    category: "生成モデル",
    title: "AutoEncoder",
    body: "入力を潜在表現に圧縮し、再構成するモデルです。次元削減や異常検知にも使われます。",
    code: "z = encoder(x)\nx_hat = decoder(z)\nloss = np.mean((x - x_hat) ** 2)"
  },
  {
    category: "生成モデル",
    title: "Variational AutoEncoder",
    body: "潜在変数を確率分布として扱い、再構成誤差とKL項を最適化します。再パラメータ化トリックが重要です。",
    code: "z = mu + sigma * eps\nloss = recon_loss + kl_loss"
  },
  {
    category: "生成モデル",
    title: "GAN",
    body: "生成器と識別器を競わせる生成モデルです。ミニマックスゲーム、モード崩壊、学習不安定性が重要論点です。",
    code: "d_loss = -np.mean(np.log(D(real)) + np.log(1 - D(fake)))\ng_loss = -np.mean(np.log(D(fake)))"
  },
  {
    category: "GNN",
    title: "Graph Neural Network",
    body: "ノード、エッジ、グラフ構造を扱うニューラルネットです。近傍ノードから情報を集約して表現を更新します。",
    code: "h_v = update(h_v, aggregate([h_u for u in neighbors_v]))"
  },
  {
    category: "GNN",
    title: "Message Passing",
    body: "各ノードが近傍からメッセージを受け取り、集約して自身の表現を更新するGNNの基本枠組みです。",
    code: "m_v = sum(message(h_v, h_u, e_uv) for u in neighbors_v)\nh_v = update(h_v, m_v)"
  },
  {
    category: "GNN",
    title: "GCN",
    body: "隣接行列に自己ループを加え、次数で正規化して近傍特徴を畳み込む代表的なGNNです。",
    code: "A_hat = A + np.eye(n)\nD_hat = np.diag(1 / np.sqrt(A_hat.sum(axis=1)))\nH = D_hat @ A_hat @ D_hat @ X @ W"
  },
  {
    category: "GNN",
    title: "GAT",
    body: "近傍ノードごとにAttention重みを学習し、重要な近傍を強く参照するGraph Attention Networkです。",
    code: "score_ij = leaky_relu(a.T @ np.r_[W @ h_i, W @ h_j])\nalpha_ij = softmax(score_ij)\nh_i = sum(alpha_ij * (W @ h_j) for j in neighbors_i)"
  },
  {
    category: "GNN",
    title: "GIN",
    body: "Graph Isomorphism Networkは表現力を重視したGNNです。近傍和と自己特徴をMLPに通します。",
    code: "h_v = mlp((1 + eps) * h_v + sum(h_u for u in neighbors_v))"
  },
  {
    category: "GNN",
    title: "GVAE",
    body: "Graph Variational AutoEncoderは、ノード埋め込みの潜在分布からリンクや隣接行列を再構成する生成モデルです。",
    code: "Z = mu + sigma * eps\nA_logits = Z @ Z.T\nloss = bce_with_logits(A_logits, A) + kl_loss"
  },
  {
    category: "GNN",
    title: "GraphSAGE",
    body: "近傍ノードをサンプリングして集約するGNNです。大規模グラフで全近傍を使う計算負荷を抑えます。",
    code: "h_v = sigma(W @ concat(h_v, mean([h_u for u in sampled_neighbors])))"
  },
  {
    category: "評価",
    title: "Precision / Recall / F1",
    body: "不均衡データではAccuracyだけでは不十分です。適合率、再現率、F1の意味を使い分けます。",
    code: "precision = tp / (tp + fp)\nrecall = tp / (tp + fn)\nf1 = 2 * precision * recall / (precision + recall)"
  },
  {
    category: "評価",
    title: "ROC-AUC",
    body: "閾値を動かしたときのTPRとFPRの関係を面積で評価します。ランキング性能の把握に使われます。",
    code: "tpr = tp / (tp + fn)\nfpr = fp / (fp + tn)"
  }
];

const quizItems = [
  {
    category: "数学",
    type: "選択問題",
    question: "交差エントロピー H(p, q) の説明として最も適切なものはどれか。",
    answers: ["真の分布pで重み付けした -log q の期待値", "予測分布qの分散だけを測る量", "パラメータ数だけで決まる正則化項"],
    correct: 0,
    explain: "交差エントロピーは H(p, q) = -sum p(x) log q(x) です。分類ではone-hotの正解分布pを使うため、正解クラスの予測確率が低いほど損失が大きくなります。",
    code: "loss = -np.sum(y_true * np.log(y_pred + 1e-7))"
  },
  {
    category: "数学",
    type: "穴埋め",
    question: "シグモイド関数の導関数として空欄に入る式はどれか。",
    codePrompt: "s = sigmoid(x)\ngrad = s * ____",
    accepted: ["(1 - s)", "1-s", "(1-s)"],
    explain: "sigmoid'(x) = sigmoid(x)(1 - sigmoid(x)) です。sが0または1に近いと勾配が小さくなり、勾配消失の一因になります。",
    code: "s = 1 / (1 + np.exp(-x))\ngrad = s * (1 - s)"
  },
  {
    category: "数学",
    type: "選択問題",
    question: "KLダイバージェンス D_KL(p || q) について正しいものはどれか。",
    answers: ["一般に非対称で、距離関数ではない", "常にD_KL(p||q)=D_KL(q||p)である", "負の値を取るほど分布が近い"],
    correct: 0,
    explain: "KLダイバージェンスは非負ですが一般に非対称です。分布間の差を測る量として使われますが、数学的な距離の条件は満たしません。",
    code: "kl_pq = np.sum(p * (np.log(p + 1e-7) - np.log(q + 1e-7)))"
  },
  {
    category: "最適化",
    type: "選択問題",
    question: "ミニバッチSGDの特徴として最も適切なものはどれか。",
    answers: ["全データより軽く、1サンプルSGDより勾配推定が安定しやすい", "必ず全データ勾配と同じ値になる", "ノイズが一切ないため局所解から抜けられない"],
    correct: 0,
    explain: "ミニバッチSGDは計算効率と勾配推定の安定性のバランスを取る方法です。GPU並列化とも相性がよく、深層学習で標準的に使われます。",
    code: "for xb, yb in mini_batches:\n    grad = compute_grad(xb, yb)\n    params -= lr * grad"
  },
  {
    category: "最適化",
    type: "穴埋め",
    question: "Momentum SGDの速度更新で空欄に入るものはどれか。",
    codePrompt: "v = momentum * v - lr * ____\nw = w + v",
    accepted: ["grad", "grad_w", "gradient"],
    explain: "Momentumは過去の速度vを残しつつ、現在の勾配を使って速度を更新します。谷の方向に加速し、振動方向をならす効果があります。",
    code: "v = 0.9 * v - lr * grad\nw = w + v"
  },
  {
    category: "最適化",
    type: "選択問題",
    question: "AdaGradの弱点として最も典型的なものはどれか。",
    answers: ["二乗勾配の累積により学習率が小さくなりすぎる", "勾配を全く使わない", "バッチサイズが1でないと使えない"],
    correct: 0,
    explain: "AdaGradは過去の二乗勾配を累積するため、分母が増え続けます。その結果、後半で更新量が極端に小さくなることがあります。",
    code: "h += grad**2\nw -= lr * grad / (np.sqrt(h) + eps)"
  },
  {
    category: "最適化",
    type: "穴埋め",
    question: "RMSPropで二乗勾配の指数移動平均を更新する式として空欄に入るものはどれか。",
    codePrompt: "h = rho * h + (1 - rho) * ____",
    accepted: ["grad ** 2", "grad**2", "gradient ** 2", "gradient**2"],
    explain: "RMSPropは二乗勾配の移動平均を使います。AdaGradのように累積値が増え続ける問題を緩和し、非定常な目的関数にも対応しやすくします。",
    code: "h = rho * h + (1 - rho) * grad**2\nw -= lr * grad / (np.sqrt(h) + eps)"
  },
  {
    category: "最適化",
    type: "選択問題",
    question: "Adamで行うバイアス補正の主な理由はどれか。",
    answers: ["初期値0の移動平均が学習初期に小さく見積もられるため", "softmaxの総和を1にするため", "畳み込みの出力サイズを整数にするため"],
    correct: 0,
    explain: "Adamのmとvは0で初期化されるため、初期ステップでは真の移動平均より小さく偏ります。m_hat, v_hatで補正してから更新します。",
    code: "m_hat = m / (1 - beta1**t)\nv_hat = v / (1 - beta2**t)"
  },
  {
    category: "最適化",
    type: "選択問題",
    question: "AdamWが通常のAdam + L2正則化と区別される理由はどれか。",
    answers: ["Weight Decayを勾配更新から分離して適用するため", "BatchNormを使えなくするため", "学習率を常に0に固定するため"],
    correct: 0,
    explain: "AdamではL2正則化を勾配に混ぜると適応的学習率の影響を受けます。AdamWは重み減衰を独立に適用するため、意図したWeight Decayになりやすいです。",
    code: "w -= lr * m_hat / (np.sqrt(v_hat) + eps)\nw -= lr * weight_decay * w"
  },
  {
    category: "活性化",
    type: "選択問題",
    question: "Leaky ReLUの目的として最も適切なものはどれか。",
    answers: ["負の入力にも小さな傾きを残してDead ReLUを緩和する", "出力を必ず確率分布にする", "時系列の順序情報を付与する"],
    correct: 0,
    explain: "通常のReLUは負の領域で勾配が0です。Leaky ReLUは負側に小さな傾きを残し、ユニットが完全に更新されなくなる問題を緩和します。",
    code: "def leaky_relu(x, alpha=0.01):\n    return np.where(x > 0, x, alpha * x)"
  },
  {
    category: "初期化",
    type: "選択問題",
    question: "ReLU系活性化関数と相性がよい初期化として代表的なものはどれか。",
    answers: ["He初期化", "全重み0初期化", "ラベルの平均値初期化"],
    correct: 0,
    explain: "He初期化はReLUで有効な分散を保つように設計されています。全重み0初期化は対称性が壊れず、各ユニットが同じ更新になってしまいます。",
    code: "w = np.random.randn(fan_in, fan_out) * np.sqrt(2 / fan_in)"
  },
  {
    category: "初期化",
    type: "穴埋め",
    question: "Xavier初期化でよく使うスケールとして空欄に入るものはどれか。",
    codePrompt: "w = np.random.randn(fan_in, fan_out) * np.sqrt(____)",
    accepted: ["1 / fan_in", "1/fan_in", "2 / (fan_in + fan_out)", "2/(fan_in+fan_out)"],
    explain: "Xavier初期化は入力と出力の分散を保つ狙いがあります。tanhやsigmoid系でよく説明され、実装ではsqrt(1/fan_in)やsqrt(2/(fan_in+fan_out))が使われます。",
    code: "w = np.random.randn(fan_in, fan_out) * np.sqrt(2 / (fan_in + fan_out))"
  },
  {
    category: "正規化",
    type: "選択問題",
    question: "BatchNormの推論時の挙動として正しいものはどれか。",
    answers: ["学習中に更新したrunning meanとrunning varianceを使う", "推論バッチの正解ラベルで平均を計算する", "Dropout maskを再利用する"],
    correct: 0,
    explain: "BatchNormは学習時にミニバッチ統計量を使い、推論時にはrunning mean/varianceを使います。学習時と推論時の挙動が異なる代表的な層です。",
    code: "x_hat = (x - running_mean) / np.sqrt(running_var + eps)\ny = gamma * x_hat + beta"
  },
  {
    category: "正規化",
    type: "選択問題",
    question: "LayerNormがTransformerでよく使われる理由として適切なものはどれか。",
    answers: ["各サンプル内の特徴次元で正規化し、バッチサイズ依存が小さいため", "畳み込みカーネルを共有できるため", "ラベルのone-hot化を省略できるため"],
    correct: 0,
    explain: "LayerNormはサンプルごとに特徴次元を正規化します。系列長やバッチサイズの扱いが変わりやすいTransformerと相性がよいです。",
    code: "mean = x.mean(axis=-1, keepdims=True)\nvar = x.var(axis=-1, keepdims=True)\ny = gamma * (x - mean) / np.sqrt(var + eps) + beta"
  },
  {
    category: "正規化",
    type: "選択問題",
    question: "GroupNormの特徴として最も適切なものはどれか。",
    answers: ["チャネルをグループに分けて正規化し、小バッチでも使いやすい", "必ず系列長方向だけで正規化する", "推論時だけDropoutを行う"],
    correct: 0,
    explain: "GroupNormはチャネルをいくつかのグループに分割して正規化します。BatchNormほどバッチサイズに依存しないため、物体検出など小バッチ学習で有効です。",
    code: "x = x.reshape(n, groups, c // groups, h, w)\nmean = x.mean(axis=(2, 3, 4), keepdims=True)"
  },
  {
    category: "正則化",
    type: "穴埋め",
    question: "L1正則化を損失へ加える式として空欄に入るものはどれか。",
    codePrompt: "loss = data_loss + lambda_ * ____",
    accepted: ["np.sum(np.abs(w))", "sum(abs(w))", "np.abs(w).sum()"],
    explain: "L1正則化は重みの絶対値和です。L2と比べて重みを0にしやすく、スパースな解を得やすい点が特徴です。",
    code: "loss = data_loss + lambda_ * np.sum(np.abs(w))"
  },
  {
    category: "正則化",
    type: "選択問題",
    question: "inverted dropoutの説明として正しいものはどれか。",
    answers: ["学習時に残したユニットを1/(1-p)でスケールし、推論時はそのまま使う", "推論時だけユニットを無効化する", "BatchNormのrunning meanを消去する"],
    correct: 0,
    explain: "inverted dropoutは学習時にスケール補正を済ませるため、推論時に出力をpで補正する必要がありません。実装上扱いやすい方式です。",
    code: "mask = (np.random.rand(*x.shape) > p) / (1 - p)\ny = x * mask"
  },
  {
    category: "CNN",
    type: "穴埋め",
    question: "畳み込み層の出力高さを求める式として空欄に入るものはどれか。",
    codePrompt: "out_h = (h + 2 * pad - kernel) // ____ + 1",
    accepted: ["stride", "s"],
    explain: "出力サイズは floor((入力 + 2*padding - kernel) / stride) + 1 です。paddingとstrideの組み合わせは頻出です。",
    code: "out_h = (h + 2 * pad - kernel) // stride + 1\nout_w = (w + 2 * pad - kernel) // stride + 1"
  },
  {
    category: "CNN",
    type: "選択問題",
    question: "1x1畳み込みの主な用途として適切なものはどれか。",
    answers: ["空間サイズを保ちながらチャネル方向を混合・圧縮する", "系列の未来情報をマスクする", "勾配を常に0にする"],
    correct: 0,
    explain: "1x1畳み込みは各位置でチャネルの線形結合を行います。ボトルネック構造でチャネル削減や特徴混合に使われます。",
    code: "params = in_channels * out_channels"
  },
  {
    category: "CNN",
    type: "選択問題",
    question: "Residual Connectionが深いネットワークに有効な理由として最も適切なものはどれか。",
    answers: ["恒等写像の経路があり、勾配が伝わりやすくなる", "全ての畳み込みを不要にする", "softmaxの計算を省略できる"],
    correct: 0,
    explain: "ResNetのスキップ接続は入力をそのまま後段に足すため、勾配が流れる経路を確保できます。深いモデルの劣化問題を緩和します。",
    code: "def residual_block(x):\n    return conv_block(x) + x"
  },
  {
    category: "CNN",
    type: "選択問題",
    question: "Depthwise Separable Convolutionの説明として正しいものはどれか。",
    answers: ["チャネルごとの空間畳み込みと1x1畳み込みに分解する", "全結合層を必ずRNNに変換する", "正解ラベルを畳み込む"],
    correct: 0,
    explain: "Depthwiseで各チャネルの空間特徴を取り、Pointwiseでチャネルを混合します。通常畳み込みよりパラメータ数と計算量を削減できます。",
    code: "normal = k * k * in_c * out_c\nseparable = k * k * in_c + in_c * out_c"
  },
  {
    category: "系列",
    type: "選択問題",
    question: "単純RNNで勾配消失・爆発が起きやすい理由として適切なものはどれか。",
    answers: ["同じ再帰重みのヤコビアンを時刻方向に何度も掛けるため", "畳み込みカーネルが大きすぎるため", "出力層がsoftmaxだから必ず起きるため"],
    correct: 0,
    explain: "BPTTでは時刻方向に勾配を伝播します。同じ重み行列由来の項を繰り返し掛けるため、固有値の大きさにより勾配が消えたり爆発したりします。",
    code: "h_t = np.tanh(x_t @ W_x + h_prev @ W_h + b)"
  },
  {
    category: "系列",
    type: "選択問題",
    question: "LSTMの忘却ゲート f_t の役割として最も適切なものはどれか。",
    answers: ["過去のセル状態をどれだけ保持するかを制御する", "入力画像の幅を半分にする", "全クラスの確率を合計1にする"],
    correct: 0,
    explain: "LSTMでは c_t = f_t * c_{t-1} + i_t * g_t です。忘却ゲートは古い記憶を残す割合を制御します。",
    code: "c_t = f_t * c_prev + i_t * g_t\nh_t = o_t * np.tanh(c_t)"
  },
  {
    category: "系列",
    type: "穴埋め",
    question: "GRUの隠れ状態更新の代表式として空欄に入るものはどれか。",
    codePrompt: "h_t = (1 - z_t) * h_prev + z_t * ____",
    accepted: ["h_candidate", "h_tilde", "candidate"],
    explain: "GRUの更新ゲートz_tは、過去の隠れ状態と候補状態をどの程度混ぜるかを制御します。LSTMより構造が簡潔です。",
    code: "h_candidate = np.tanh(x_t @ W_x + (r_t * h_prev) @ W_h)\nh_t = (1 - z_t) * h_prev + z_t * h_candidate"
  },
  {
    category: "Attention",
    type: "穴埋め",
    question: "Scaled Dot-Product Attentionのスケール項として空欄に入るものはどれか。",
    codePrompt: "scores = Q @ K.T / ____",
    accepted: ["np.sqrt(d_k)", "sqrt(d_k)", "math.sqrt(d_k)"],
    explain: "d_kが大きいと内積値の分散が大きくなり、softmaxが飽和しやすくなります。sqrt(d_k)で割って安定化します。",
    code: "scores = Q @ K.T / np.sqrt(d_k)\nweights = softmax(scores)\nout = weights @ V"
  },
  {
    category: "Attention",
    type: "選択問題",
    question: "Multi-Head Attentionの利点として適切なものはどれか。",
    answers: ["複数の表現空間で異なる関係を同時に捉えられる", "勾配計算を完全に不要にする", "入力系列をランダムに削除するだけである"],
    correct: 0,
    explain: "複数ヘッドは異なる射影でAttentionを計算します。構文的関係、位置関係、意味的関係などを分担して捉えられる可能性があります。",
    code: "head_i = attention(Q @ Wq_i, K @ Wk_i, V @ Wv_i)\nout = concat(heads) @ Wo"
  },
  {
    category: "Transformer",
    type: "選択問題",
    question: "TransformerでPositional Encodingが必要になる主な理由はどれか。",
    answers: ["Self-Attention単体ではトークン順序を直接区別しないため", "BatchNormの平均を保存するため", "ReLUをsigmoidに変換するため"],
    correct: 0,
    explain: "Self-Attentionは集合的に全トークン間の関係を計算します。そのままでは順序情報がないため、位置埋め込みやRoPEなどで位置を与えます。",
    code: "x = token_embedding + positional_embedding"
  },
  {
    category: "Transformer",
    type: "選択問題",
    question: "DecoderのMasked Self-Attentionで未来トークンを隠す理由はどれか。",
    answers: ["自己回帰生成で未来の正解を見ないようにするため", "畳み込みのpaddingを0にするため", "過学習を必ず完全に防ぐため"],
    correct: 0,
    explain: "言語生成では左から右へ次トークンを予測します。学習時に未来トークンが見えると、推論時と条件がずれてしまいます。",
    code: "scores = np.where(mask == 0, -1e9, scores)\nweights = softmax(scores)"
  },
  {
    category: "Transformer",
    type: "選択問題",
    question: "Pre-LN Transformerの特徴として適切なものはどれか。",
    answers: ["各サブレイヤーの入力側にLayerNormを置き、深いモデルで安定しやすい", "LayerNormを完全に使わない", "Attentionの代わりに必ずRNNを使う"],
    correct: 0,
    explain: "Pre-LNは x + sublayer(LN(x)) の形を取ります。勾配が残差経路を通りやすく、深いTransformerで学習安定性が改善しやすいです。",
    code: "x = x + self_attention(layer_norm(x))\nx = x + mlp(layer_norm(x))"
  },
  {
    category: "生成モデル",
    type: "選択問題",
    question: "AutoEncoderの基本目的として正しいものはどれか。",
    answers: ["入力を潜在表現に圧縮し、元入力を再構成する", "正解ラベルだけから画像を畳み込む", "Attentionの未来マスクを作る"],
    correct: 0,
    explain: "AutoEncoderは encoder と decoder で構成され、再構成誤差を最小化します。潜在表現の学習、異常検知、次元削減に使われます。",
    code: "z = encoder(x)\nx_hat = decoder(z)\nloss = np.mean((x - x_hat) ** 2)"
  },
  {
    category: "生成モデル",
    type: "穴埋め",
    question: "VAEの再パラメータ化トリックとして空欄に入るものはどれか。",
    codePrompt: "z = mu + sigma * ____",
    accepted: ["eps", "epsilon", "noise"],
    explain: "VAEでは確率サンプリングをそのまま挟むと勾配が流れにくいため、標準正規ノイズepsを外に出して z = mu + sigma * eps と表します。",
    code: "eps = np.random.randn(*mu.shape)\nz = mu + sigma * eps"
  },
  {
    category: "生成モデル",
    type: "選択問題",
    question: "GANのモード崩壊の説明として最も適切なものはどれか。",
    answers: ["生成器が多様性を失い、限られたパターンばかり生成する", "識別器が画像サイズを必ず2倍にする", "潜在変数を全く使えない状態"],
    correct: 0,
    explain: "モード崩壊では、データ分布の一部のモードだけを生成して識別器をだませる状態になります。多様性の評価や学習安定化が重要です。",
    code: "z = np.random.randn(batch, latent_dim)\nfake = generator(z)"
  },
  {
    category: "評価",
    type: "選択問題",
    question: "不均衡な二値分類でAccuracyだけを見る危険性として正しいものはどれか。",
    answers: ["多数派だけ予測しても高いAccuracyになることがある", "混同行列を作れなくなる", "損失関数が必ず負になる"],
    correct: 0,
    explain: "陽性が1%しかない場合、全て陰性と予測してもAccuracyは99%になります。Precision、Recall、F1、AUCなども確認すべきです。",
    code: "precision = tp / (tp + fp)\nrecall = tp / (tp + fn)"
  },
  {
    category: "評価",
    type: "穴埋め",
    question: "F1スコアの式として空欄に入るものはどれか。",
    codePrompt: "f1 = 2 * precision * recall / ____",
    accepted: ["(precision + recall)", "precision+recall", "(recall + precision)", "recall+precision"],
    explain: "F1はPrecisionとRecallの調和平均です。どちらか一方だけ高くても低くなり、バランスを見たいときに使います。",
    code: "f1 = 2 * precision * recall / (precision + recall + 1e-7)"
  },
  {
    category: "実装",
    type: "選択問題",
    question: "数値安定なsoftmax実装で、expの前に最大値を引く理由はどれか。",
    answers: ["指数関数のオーバーフローを防ぐため", "確率の総和を0にするため", "勾配を完全に消すため"],
    correct: 0,
    explain: "softmaxは定数を足し引きしても結果が変わりません。最大値を引くことでexpの入力が大きくなりすぎるのを防ぎます。",
    code: "z = x - np.max(x, axis=-1, keepdims=True)\nprobs = np.exp(z) / np.sum(np.exp(z), axis=-1, keepdims=True)"
  },
  {
    category: "実装",
    type: "穴埋め",
    question: "勾配爆発対策のgradient clippingとして空欄に入るものはどれか。",
    codePrompt: "grad = grad * clip_norm / max(clip_norm, ____)",
    accepted: ["np.linalg.norm(grad)", "norm", "grad_norm"],
    explain: "勾配ノルムが閾値を超えたときだけスケールを下げます。RNN系や大規模モデルで学習安定化に使われます。",
    code: "grad_norm = np.linalg.norm(grad)\ngrad = grad * clip_norm / max(clip_norm, grad_norm)"
  },
  {
    category: "数学",
    type: "選択問題",
    question: "Softmaxを数値安定に実装するとき、expの前に最大値を引く理由はどれか。",
    answers: ["指数関数のオーバーフローを防ぐため", "正解ラベルをone-hotにするため", "勾配を必ず0にするため"],
    correct: 0,
    explain: "Softmaxは全ロジットから同じ定数を引いても結果が変わりません。最大値を引くとexpに入る値が0以下になりやすく、オーバーフローを防げます。",
    code: "z = logits - logits.max(axis=-1, keepdims=True)\nprob = np.exp(z) / np.exp(z).sum(axis=-1, keepdims=True)"
  },
  {
    category: "数学",
    type: "選択問題",
    question: "Softmaxと交差エントロピーを組み合わせた多クラス分類で、損失が大きくなるのはどの状況か。",
    answers: ["正解クラスの予測確率が低いとき", "全クラスの確率和が1のとき", "ロジットの最大値を引いたとき"],
    correct: 0,
    explain: "交差エントロピーは正解クラス確率の負の対数です。正解クラス確率が低いほど -log(p) が大きくなります。",
    code: "loss = -np.mean(np.log(prob[np.arange(n), target] + 1e-7))"
  },
  {
    category: "最適化",
    type: "選択問題",
    question: "Learning Rate Schedulerの目的として最も適切なものはどれか。",
    answers: ["学習の段階に応じて更新幅を調整し、安定性や収束を改善する", "パラメータ数を必ず0にする", "BatchNormのrunning meanを削除する"],
    correct: 0,
    explain: "学習初期は大きめ、後半は小さめにするなど、学習率を変えることで探索と収束のバランスを取りやすくなります。WarmupやCosine decayが代表例です。",
    code: "lr = base_lr * 0.5 * (1 + np.cos(np.pi * step / total_steps))"
  },
  {
    category: "GNN",
    type: "選択問題",
    question: "GraphSAGEが大規模グラフで有効な理由として適切なものはどれか。",
    answers: ["近傍をサンプリングして集約するため計算量を抑えやすい", "全ノードを必ず完全結合にするため", "隣接行列を一切使えないため"],
    correct: 0,
    explain: "GraphSAGEは全近傍を毎回使うのではなく、サンプリングした近傍を集約します。大規模グラフでミニバッチ学習しやすい点が特徴です。",
    code: "h_v = sigma(W @ np.r_[h_v, np.mean(sampled_neighbor_features, axis=0)])"
  },
  {
    category: "GNN",
    type: "選択問題",
    question: "GNNのMessage Passingの説明として最も適切なものはどれか。",
    answers: ["近傍ノードやエッジから情報を集約し、ノード表現を更新する", "画像の画素を必ず1次元系列に並べ替える", "全ノードの特徴をランダムに削除して終わる"],
    correct: 0,
    explain: "Message Passingでは、各ノードが隣接ノードからメッセージを受け取り、sum/mean/max/attentionなどで集約して自身の表現を更新します。GNNの多くはこの枠組みで理解できます。",
    code: "messages = [message(h_v, h_u) for u in neighbors_v]\nh_v_next = update(h_v, aggregate(messages))"
  },
  {
    category: "GNN",
    type: "穴埋め",
    question: "GCNで自己ループを加えた隣接行列として空欄に入るものはどれか。",
    codePrompt: "A_hat = A + ____",
    accepted: ["np.eye(n)", "i", "I", "eye(n)"],
    explain: "GCNでは各ノード自身の特徴も集約に含めるため、隣接行列Aに単位行列Iを足して自己ループを加えます。その後、次数行列で対称正規化します。",
    code: "A_hat = A + np.eye(n)\nD_hat = np.diag(1 / np.sqrt(A_hat.sum(axis=1)))\nH = D_hat @ A_hat @ D_hat @ X @ W"
  },
  {
    category: "GNN",
    type: "選択問題",
    question: "GATがGCNと比べて明示的に学習するものはどれか。",
    answers: ["近傍ノードごとのAttention重み", "画像のストライド幅", "VAEの再構成誤差だけ"],
    correct: 0,
    explain: "GATは各エッジまたは近傍ノードに対してAttention係数を計算し、重要な近傍を強く集約します。次数正規化だけで重みを決めるGCNとの重要な違いです。",
    code: "e_ij = leaky_relu(a.T @ np.r_[W @ h_i, W @ h_j])\nalpha_ij = softmax(e_ij over neighbors)\nh_i = sum(alpha_ij * W @ h_j)"
  },
  {
    category: "GNN",
    type: "選択問題",
    question: "GINが表現力の文脈でよく説明される理由として適切なものはどれか。",
    answers: ["近傍特徴の和集約とMLPにより、グラフ同型性判定に近い表現力を目指すため", "Attentionを必ず使うため", "隣接行列を使わず画像だけを扱うため"],
    correct: 0,
    explain: "GINはWeisfeiler-Lehmanテストとの関係で説明されることが多いGNNです。sum集約はmean/maxより多重集合の違いを保持しやすく、MLPで表現力を高めます。",
    code: "h_v_next = mlp((1 + eps) * h_v + sum(h_u for u in neighbors_v))"
  },
  {
    category: "GNN",
    type: "選択問題",
    question: "GVAEの主な目的として最も適切なものはどれか。",
    answers: ["ノード潜在変数からグラフ構造やリンクを再構成する", "BatchNormのrunning meanだけを推定する", "CNNのカーネルサイズを自動で整数化する"],
    correct: 0,
    explain: "GVAEはVAEの考え方をグラフに適用します。エンコーダでノードの潜在分布を推定し、内積デコーダなどで隣接行列やリンク確率を再構成します。",
    code: "Z = mu + np.exp(0.5 * log_var) * eps\nA_prob = sigmoid(Z @ Z.T)\nloss = recon_bce + kl_loss"
  },
  {
    category: "Python",
    type: "選択問題",
    question: "配列xに対するx[2:8:2]が表すものはどれか。",
    answers: ["index 2から7までを2個おきに取得する", "index 2から8までを全て取得する", "先頭2個と末尾8個を取得する"],
    correct: 0,
    explain: "スライスはstartを含みstopを含みません。したがってindex 2, 4, 6を取得します。stepが負なら逆方向へ進みます。",
    code: "x = np.arange(10)\nresult = x[2:8:2]  # [2, 4, 6]"
  },
  {
    category: "NumPy",
    type: "選択問題",
    question: "shape (32, 10) のXとshape (10,) のbiasをX + biasで加算できる理由はどれか。",
    answers: ["末尾次元10が一致し、biasがバッチ方向へブロードキャストされる", "NumPyがbiasをランダムに32個作る", "行列積として計算される"],
    correct: 0,
    explain: "ブロードキャストは末尾次元から比較します。(32,10)と(10,)は末尾の10が一致するため、biasが各行に加算されます。",
    code: "X = np.zeros((32, 10))\nbias = np.arange(10)\nY = X + bias"
  },
  {
    category: "NumPy",
    type: "穴埋め",
    question: "列ごとの平均をshape (1, d)で保持するコードの空欄に入るものはどれか。",
    codePrompt: "mean = X.mean(axis=0, ____)",
    accepted: ["keepdims=True", "keepdims = True"],
    explain: "axis=0で行方向を集約し、keepdims=Trueで集約した軸を長さ1として残します。X - meanを安全にブロードキャストできます。",
    code: "mean = X.mean(axis=0, keepdims=True)\nX_centered = X - mean"
  },
  {
    category: "Pandas",
    type: "選択問題",
    question: "訓練データと検証データの欠損値を中央値で補完するとき、正しい手順はどれか。",
    answers: ["訓練データだけで中央値を求め、両方に適用する", "検証データを含めて中央値を求める", "正解ラベルごとに検証データの中央値を求める"],
    correct: 0,
    explain: "検証データの情報を前処理に使うとデータリークになります。補完値は訓練データだけでfitし、検証・テストへtransformします。",
    code: "median = train['age'].median()\ntrain['age'] = train['age'].fillna(median)\nvalid['age'] = valid['age'].fillna(median)"
  },
  {
    category: "統計",
    type: "選択問題",
    question: "相関係数について正しい説明はどれか。",
    answers: ["線形な関連の強さを-1から1で表すが、因果関係を保証しない", "常に0以上である", "変数の単位を変えると必ず符号が反転する"],
    correct: 0,
    explain: "相関係数は共分散を標準偏差で正規化したものです。強い相関があっても、交絡や逆因果があるため因果関係とは限りません。",
    code: "corr = np.corrcoef(x, y)[0, 1]"
  },
  {
    category: "確率分布",
    type: "選択問題",
    question: "二項分布Binomial(n, p)の期待値と分散の組み合わせはどれか。",
    answers: ["期待値np、分散np(1-p)", "期待値p、分散p^2", "期待値n+p、分散n-p"],
    correct: 0,
    explain: "独立なn回のベルヌーイ試行の和なので、期待値はnp、分散はnp(1-p)です。",
    code: "mean = n * p\nvariance = n * p * (1 - p)"
  },
  {
    category: "統計",
    type: "選択問題",
    question: "中心極限定理が近似する対象として最も適切なものはどれか。",
    answers: ["十分大きな標本における標本平均の分布", "元データの分布そのもの", "全ての確率変数の最大値"],
    correct: 0,
    explain: "中心極限定理は、一定の条件下で標本平均を標準化した分布が正規分布へ近づくことを述べます。元の観測値自体が正規分布になるわけではありません。",
    code: "sample_means = [np.mean(np.random.exponential(1, 50)) for _ in range(5000)]"
  },
  {
    category: "統計",
    type: "選択問題",
    question: "ベイズの定理におけるP(B|A)の役割はどれか。",
    answers: ["仮説Aのもとで観測Bが得られる尤度", "観測後の事後確率P(A|B)", "必ず1になる周辺確率"],
    correct: 0,
    explain: "P(B|A)は尤度、P(A)は事前確率、P(B)は周辺尤度、P(A|B)は事後確率です。",
    code: "posterior = likelihood * prior / evidence"
  },
  {
    category: "数学",
    type: "選択問題",
    question: "対称行列の固有値分解について正しいものはどれか。",
    answers: ["実固有値と互いに直交する固有ベクトルを持つ", "固有値は必ず複素数のみになる", "正方行列でなくても同じ形で固有値分解できる"],
    correct: 0,
    explain: "実対称行列AはA=QΛQ^Tと直交対角化できます。共分散行列の主成分分析で重要です。",
    code: "eigenvalues, eigenvectors = np.linalg.eigh(covariance_matrix)"
  },
  {
    category: "数学",
    type: "選択問題",
    question: "特異値分解 X=UΣV^T のVの列がPCAで表すものはどれか。",
    answers: ["特徴空間における主成分方向", "各標本の正解ラベル", "損失関数の学習率"],
    correct: 0,
    explain: "中心化したデータ行列の右特異ベクトルは、特徴空間の主成分方向です。特異値の二乗は各方向の分散と関係します。",
    code: "U, S, Vt = np.linalg.svd(X_centered, full_matrices=False)\ncomponents = Vt[:k]"
  },
  {
    category: "正規化",
    type: "選択問題",
    question: "入力shapeが(N,C,H,W)のBatchNorm2dで、チャネルごとの平均・分散を計算する軸はどれか。",
    answers: ["N,H,W", "Cのみ", "N,C,H,Wすべて"],
    correct: 0,
    explain: "BatchNorm2dはチャネルCごとに統計量を持ち、各チャネルについてバッチ・高さ・幅のN,H,W方向で平均分散を計算します。",
    code: "mean = x.mean(axis=(0, 2, 3), keepdims=True)"
  },
  {
    category: "CNN",
    type: "選択問題",
    question: "Conv2d(3, 64, kernel_size=3, bias=True)のパラメータ数はいくつか。",
    answers: ["64×3×3×3 + 64 = 1792", "3×3 = 9", "64×64×3×3 = 36864"],
    correct: 0,
    explain: "各出力チャネルは3入力チャネル分の3×3カーネルを持ち、さらにbiasを1つ持ちます。",
    code: "params = out_c * in_c * kernel_h * kernel_w + out_c"
  },
  {
    category: "CNN",
    type: "選択問題",
    question: "stride 1の3×3畳み込みを2層重ねたときの理論上の受容野はどれか。",
    answers: ["5×5", "6×6", "9×9"],
    correct: 0,
    explain: "最初の3×3出力の1点は入力3×3を見る。次の3×3はその周囲をさらに1ずつ広げるため、受容野は5×5になります。",
    code: "receptive_field = 1 + 2 * (kernel_size - 1)  # 5"
  },
  {
    category: "Attention",
    type: "選択問題",
    question: "標準Self-Attentionの系列長nに対する主要な計算量はどれか。",
    answers: ["O(n^2 d)", "O(n d)のみ", "O(log n)"],
    correct: 0,
    explain: "QK^Tでn×nのAttentionスコアを作るため、系列長に対して二次の計算・メモリが必要です。",
    code: "scores = Q @ K.transpose(-2, -1)  # (..., n, n)"
  },
  {
    category: "Transformer",
    type: "選択問題",
    question: "Label Smoothingの効果として適切なものはどれか。",
    answers: ["one-hot正解を少し平滑化し、過度に自信のある予測を抑える", "全てのラベルを同じクラスへ変更する", "系列長を半分にする"],
    correct: 0,
    explain: "正解クラスを1、他を0とせず少量の確率を他クラスへ分配し、過信を抑えて汎化を改善することがあります。",
    code: "smoothed = one_hot * (1 - eps) + eps / num_classes"
  },
  {
    category: "系列",
    type: "選択問題",
    question: "Teacher Forcingの学習時と推論時の差によって生じる問題はどれか。",
    answers: ["Exposure Bias", "Internal Covariate Shiftだけ", "モード崩壊のみ"],
    correct: 0,
    explain: "学習時は正解の前トークンを入力しますが、推論時は自分の予測を入力するため、誤差が蓄積するExposure Biasが生じます。",
    code: "decoder_input = target_prev if training else predicted_prev"
  },
  {
    category: "生成モデル",
    type: "選択問題",
    question: "VAEでKL項を強くしすぎた場合に起き得ることはどれか。",
    answers: ["潜在変数が入力情報を持たなくなるPosterior Collapse", "畳み込みの出力が必ず大きくなる", "正解ラベルが増える"],
    correct: 0,
    explain: "q(z|x)が事前分布p(z)へ強く近づきすぎると、zがxの情報を使わなくなるPosterior Collapseが起き得ます。",
    code: "loss = recon_loss + beta * kl_loss"
  },
  {
    category: "GNN",
    type: "選択問題",
    question: "GNNで層を深くしすぎたときのOver-smoothingとは何か。",
    answers: ["ノード表現が似通い、識別しにくくなる", "全エッジが必ず削除される", "隣接行列が非正方になる"],
    correct: 0,
    explain: "近傍集約を繰り返すと、連結したノードの表現が混ざり続け、最終的に似た埋め込みへ収束しやすくなります。",
    code: "H = A_norm @ H @ W  # repeated propagation can smooth node features"
  },
  {
    category: "統計グラフ",
    type: "グラフ読解",
    question: "このヒストグラムから最も適切に読み取れる分布の特徴はどれか。",
    chart: { type: "histogram", title: "右に裾が長い分布", values: [4, 10, 18, 27, 21, 13, 8, 5, 3, 1] },
    answers: ["右側に長い裾を持つ正の歪みがある", "完全な一様分布である", "分散が必ず0である"],
    correct: 0,
    explain: "度数の山が左寄りにあり、右側へ小さな度数が続いているため右裾の長い分布です。一般に平均が中央値より大きくなりやすいです。",
    code: "counts, edges = np.histogram(x, bins=10)"
  },
  {
    category: "統計グラフ",
    type: "グラフ読解",
    question: "この散布図から読み取れる最も適切な関係はどれか。",
    chart: { type: "scatter", title: "特徴量Xと目的変数Y", points: [[1,1.2],[2,1.9],[3,3.1],[4,3.8],[5,5.2],[6,5.7],[7,7.1],[8,7.8]] },
    answers: ["強い正の線形相関がある", "強い負の相関がある", "Yは常に一定である"],
    correct: 0,
    explain: "Xが大きくなるほどYもほぼ直線的に増えています。ただし相関が強くても因果関係を証明するものではありません。",
    code: "corr = np.corrcoef(x, y)[0, 1]"
  },
  {
    category: "統計グラフ",
    type: "グラフ読解",
    question: "箱ひげ図の値がmin=1, Q1=3, median=5, Q3=8, max=15のとき、IQRはいくつか。",
    chart: { type: "boxplot", title: "テスト得点の箱ひげ図", values: [1, 3, 5, 8, 15] },
    answers: ["5", "7", "14"],
    correct: 0,
    explain: "IQR=Q3-Q1=8-3=5です。IQRは中央50%のばらつきを示し、外れ値の影響を受けにくい尺度です。",
    code: "q1, q3 = np.percentile(x, [25, 75])\niqr = q3 - q1"
  },
  {
    category: "前処理",
    type: "選択問題",
    question: "欠損率が80%の特徴量を扱うとき、最初に検討すべきことはどれか。",
    answers: ["欠損の発生理由と予測対象との関係を調べ、削除・補完・欠損フラグを比較する", "必ず平均値で埋める", "欠損行を無条件に全削除する"],
    correct: 0,
    explain: "高欠損率でも欠損自体に情報がある場合があります。MCAR/MAR/MNARの可能性、業務上の意味、検証性能を見て処理を選びます。",
    code: "missing_rate = df.isna().mean().sort_values(ascending=False)"
  },
  {
    category: "前処理",
    type: "選択問題",
    question: "標準化でデータリークを防ぐ正しい実装はどれか。",
    answers: ["trainでmean/stdを求め、valid/testにも同じ値を使う", "全データでmean/stdを求める", "testごとに別のmean/stdを求める"],
    correct: 0,
    explain: "検証・テストの分布情報をtrain時に使わないため、前処理器はtrainだけでfitします。",
    code: "mean, std = X_train.mean(0), X_train.std(0)\nX_valid = (X_valid - mean) / (std + 1e-7)"
  },
  {
    category: "前処理",
    type: "選択問題",
    question: "Target Encodingで特に注意すべきことはどれか。",
    answers: ["同じ行の目的変数をエンコード値へ混ぜないようout-of-foldで計算する", "カテゴリを必ず整数順序へ変換する", "欠損値を無視してよい"],
    correct: 0,
    explain: "全trainの目的変数平均をそのまま各train行へ使うと、自分自身のラベル情報が特徴へ漏れます。OOF方式が有効です。",
    code: "encoded_valid = valid['category'].map(train.groupby('category')['target'].mean())"
  },
  {
    category: "深層学習技術",
    type: "選択問題",
    question: "転移学習の初期段階でbackboneを凍結する主な理由はどれか。",
    answers: ["事前学習済み表現を急激に壊さず、headを先に適応させるため", "勾配計算を必ず不可能にするため", "入力画像を削除するため"],
    correct: 0,
    explain: "データが少ない下流タスクでは、大きな学習率で全層を更新すると有用な事前学習表現を壊すことがあります。",
    code: "for p in model.backbone.parameters():\n    p.requires_grad = False"
  },
  {
    category: "深層学習技術",
    type: "選択問題",
    question: "FP16 Mixed PrecisionでGradScalerを使う目的はどれか。",
    answers: ["小さな勾配のunderflowを防ぐため損失を一時的に拡大する", "モデルを整数だけで計算する", "バッチサイズを必ず1にする"],
    correct: 0,
    explain: "損失を大きな係数でscaleしてbackwardし、optimizer更新前に勾配をunscaleします。非有限値も検出できます。",
    code: "scaler.scale(loss).backward()\nscaler.step(optimizer)\nscaler.update()"
  },
  {
    category: "深層学習技術",
    type: "選択問題",
    question: "Knowledge Distillationで温度Tを大きくする効果はどれか。",
    answers: ["Teacherのクラス確率を滑らかにし、クラス間の類似情報を見せる", "確率を必ずone-hotにする", "Studentのパラメータを0にする"],
    correct: 0,
    explain: "高い温度では確率分布が平滑になり、正解以外のクラスに対するTeacherの相対的な知識もStudentへ伝えられます。",
    code: "teacher_prob = softmax(teacher_logits / temperature)"
  },
  {
    category: "深層学習技術",
    type: "選択問題",
    question: "Mixupで入力とラベルを処理する方法として正しいものはどれか。",
    answers: ["2標本の入力とone-hotラベルを同じ比率lambdaで線形混合する", "入力だけ混ぜてラベルは片方を使う", "全画像を0にする"],
    correct: 0,
    explain: "Mixupではx'=λx_i+(1-λ)x_j、y'=λy_i+(1-λ)y_jとして、入力とラベルを対応させて混合します。",
    code: "mixed_x = lam * x1 + (1 - lam) * x2\nmixed_y = lam * y1 + (1 - lam) * y2"
  },
  {
    category: "深層学習技術",
    type: "選択問題",
    question: "勾配チェックで有限差分を使う目的はどれか。",
    answers: ["解析的backwardの勾配が数値微分と一致するか検証する", "推論速度を測る", "データを正規化する"],
    correct: 0,
    explain: "小さなepsilonでパラメータを前後に動かした損失差から数値勾配を求め、backward実装のバグを検出します。",
    code: "numeric_grad = (loss(w + eps) - loss(w - eps)) / (2 * eps)"
  },
  {
    category: "深層学習技術",
    type: "選択問題",
    question: "モデルのCalibrationが良い状態とはどれか。",
    answers: ["予測確率0.8の標本群でおよそ80%が正解する", "全予測確率が1.0である", "Accuracyが必ず100%である"],
    correct: 0,
    explain: "Calibrationは予測確率と実際の正解頻度の一致度です。Temperature Scalingなどで調整できます。",
    code: "calibrated_prob = softmax(logits / temperature)"
  },
  {
    category: "学習パラダイム", type: "選択問題",
    question: "教師あり学習に該当するものはどれか。",
    answers: ["画像と犬・猫ラベルから分類器を学習する", "ラベルなし顧客をクラスタリングする", "報酬からゲーム方策を学習する"], correct: 0,
    explain: "教師あり学習は入力と正解ラベルの組を使います。分類では離散クラス、回帰では連続値を予測します。",
    code: "model.fit(X_train, y_train)"
  },
  {
    category: "学習パラダイム", type: "選択問題",
    question: "自己教師あり学習の特徴として適切なものはどれか。",
    answers: ["入力データ自身から監督信号を作り表現を事前学習する", "必ず人手ラベルだけを使う", "報酬関数だけを使う"], correct: 0,
    explain: "Masked Language ModelingやContrastive Learningのように、データから擬似的な正解を構成します。",
    code: "loss = contrastive_loss(encoder(view1), encoder(view2))"
  },
  {
    category: "強化学習", type: "選択問題",
    question: "Q-learningの更新式におけるmax_a' Q(s',a')は何を表すか。",
    answers: ["次状態から最良行動を選んだときの推定将来価値", "現在の即時報酬だけ", "方策のエントロピーだけ"], correct: 0,
    explain: "Q-learningはoff-policy TD制御で、次状態の最大Q値をbootstrap targetへ使います。",
    code: "target = reward + gamma * Q[next_state].max()"
  },
  {
    category: "古典モデル", type: "選択問題",
    question: "SVMでCを大きくすると一般にどうなるか。",
    answers: ["訓練誤分類への罰則が強くなり、狭いマージンでも訓練データへ合わせやすい", "全ての特徴量が削除される", "カーネルが使用不能になる"], correct: 0,
    explain: "Cが大きいとmargin violationを強く罰します。過学習とのバランスを検証データで調整します。",
    code: "loss = 0.5 * np.sum(w**2) + C * hinge.mean()"
  },
  {
    category: "古典モデル", type: "選択問題",
    question: "Random Forestで木同士の相関を下げる仕組みはどれか。",
    answers: ["Bootstrap標本と分割時の特徴量サブサンプリング", "全ての木を同一データ・同一特徴で作る", "木を1本だけ使う"], correct: 0,
    explain: "異なる標本と特徴候補で木を多様化し、平均・多数決によって分散を下げます。",
    code: "feature_subset = rng.choice(n_features, size=m, replace=False)"
  },
  {
    category: "古典モデル", type: "選択問題",
    question: "決定木を深くしすぎた場合に起きやすいことはどれか。",
    answers: ["葉が細分化され訓練データへ過学習する", "必ず線形モデルになる", "全特徴量が同じ重要度になる"], correct: 0,
    explain: "max_depth、min_samples_leaf、剪定などで複雑さを制御します。",
    code: "if depth >= max_depth or len(y) < min_samples_leaf: return leaf"
  },
  {
    category: "古典モデル", type: "選択問題",
    question: "k-NNの前に標準化が重要な理由はどれか。",
    answers: ["スケールの大きい特徴が距離を支配するのを防ぐ", "木の深さを減らす", "ラベルを連続値へ変える"], correct: 0,
    explain: "k-NNは距離を直接使うため、単位やスケールが結果に強く影響します。",
    code: "X_scaled = (X - train_mean) / train_std"
  },
  {
    category: "古典モデル", type: "選択問題",
    question: "Naive Bayesのnaiveが指す仮定はどれか。",
    answers: ["特徴量がクラス条件付きで独立", "クラス事前確率が必ず等しい", "全特徴量が正規分布"], correct: 0,
    explain: "強い独立仮定ですが、テキスト分類など高次元疎データで有効な場合があります。",
    code: "log_posterior = log_prior + log_likelihood.sum(axis=1)"
  },
  {
    category: "教師なし", type: "選択問題",
    question: "k-meansの目的関数は何を最小化するか。",
    answers: ["各点と所属クラスタ重心の二乗距離和", "クラス分類の交差エントロピー", "方策の累積報酬"], correct: 0,
    explain: "クラスタ内平方和を最小化します。球状・同程度の分散のクラスタを仮定しやすい手法です。",
    code: "inertia = np.sum((X - centers[labels]) ** 2)"
  },
  {
    category: "教師なし", type: "選択問題",
    question: "PCAを適用する前に通常データを中心化する理由はどれか。",
    answers: ["平均からの変動方向を主成分として求めるため", "ラベルをone-hot化するため", "クラスタ数を決めるため"], correct: 0,
    explain: "中心化しないと原点からの大きさが主成分へ影響し、共分散構造を正しく捉えにくくなります。",
    code: "X_centered = X - X.mean(axis=0, keepdims=True)"
  },
  {
    category: "NumPy実践", type: "選択問題",
    question: "np.stack([a,b], axis=0)とnp.concatenate([a,b], axis=0)の違いはどれか。",
    answers: ["stackは新しい軸を追加し、concatenateは既存軸で連結する", "完全に同じ", "concatenateだけが配列を返す"], correct: 0,
    explain: "a,bがshape(n,d)ならstackは(2,n,d)、axis=0のconcatenateは(2n,d)です。",
    code: "stacked = np.stack([a, b], 0)\njoined = np.concatenate([a, b], 0)"
  },
  {
    category: "Pandas実践", type: "選択問題",
    question: "時系列の移動平均特徴で未来情報リークを防ぐ方法はどれか。",
    answers: ["rollingの前にshift(1)して現在時点の値も除外する", "未来を含むcenter=Trueを使う", "全期間平均を各行へ入れる"], correct: 0,
    explain: "予測時点より後の値だけでなく、目的設定によっては現在値も利用不能です。shiftで利用可能時点を揃えます。",
    code: "df['ma7'] = df['value'].shift(1).rolling(7).mean()"
  },
  {
    category: "確率分布", type: "選択問題",
    question: "ポアソン分布の期待値と分散はどれか。",
    answers: ["どちらもλ", "期待値0、分散1", "期待値λ、分散λ^2"], correct: 0,
    explain: "一定区間の事象発生回数を表し、E[X]=Var(X)=λです。",
    code: "mean = variance = lambda_"
  },
  {
    category: "確率分布", type: "選択問題",
    question: "指数分布の無記憶性を表す式はどれか。",
    answers: ["P(X>s+t|X>s)=P(X>t)", "P(X=s+t)=P(X=s)+P(X=t)", "E[X]=0"], correct: 0,
    explain: "すでにs時間待ったという情報が、さらにt時間待つ確率へ影響しない性質です。",
    code: "survival = np.exp(-rate * t)"
  },
  {
    category: "確率分布", type: "選択問題",
    question: "二項尤度に対する共役事前分布として代表的なものはどれか。",
    answers: ["ベータ分布", "正規分布のみ", "ポアソン分布"], correct: 0,
    explain: "事前Beta(α,β)と成功s・失敗fを観測すると、事後はBeta(α+s,β+f)です。",
    code: "posterior_alpha = alpha + successes\nposterior_beta = beta + failures"
  }
];

const progressKey = "ml-studio-progress";
const roadmapList = document.querySelector("#roadmapList");
const conceptGrid = document.querySelector("#conceptGrid");
const termDetailSection = document.querySelector("#term-detail");
const termDetail = document.querySelector("#termDetail");
const learningRate = document.querySelector("#learningRate");
const epochs = document.querySelector("#epochs");
const learningRateValue = document.querySelector("#learningRateValue");
const epochsValue = document.querySelector("#epochsValue");
const runExperiment = document.querySelector("#runExperiment");
const canvas = document.querySelector("#lossChart");
const labInsight = document.querySelector("#labInsight");
const questionCounter = document.querySelector("#questionCounter");
const questionType = document.querySelector("#questionType");
const questionText = document.querySelector("#questionText");
const quizChartPanel = document.querySelector("#quizChartPanel");
const quizChart = document.querySelector("#quizChart");
const codePrompt = document.querySelector("#codePrompt");
const answerList = document.querySelector("#answerList");
const fillAnswer = document.querySelector("#fillAnswer");
const quizResult = document.querySelector("#quizResult");
const quizCategory = document.querySelector("#quizCategory");
const quizSelect = document.querySelector("#quizSelect");
const questionGrid = document.querySelector("#questionGrid");
const prevQuestion = document.querySelector("#prevQuestion");
const nextQuestion = document.querySelector("#nextQuestion");

let currentQuiz = 0;
let filteredQuizIndexes = quizItems.map((_, index) => index);

const termDetails = {
  "畳み込み": {
    formula: "\\displaystyle H_{out}=\\left\\lfloor \\frac{H+2P-F}{S} \\right\\rfloor + 1",
    detail: "畳み込みは、入力の局所領域に同じフィルタを滑らせて特徴を抽出する操作です。画像ではエッジ、模様、部品のような局所パターンを階層的に捉えます。全結合と違い、重み共有によりパラメータ数を抑えられる点が重要です。",
    code: `def conv2d_single_channel(x, kernel, stride=1, pad=0):
    x = np.pad(x, ((pad, pad), (pad, pad)))
    kh, kw = kernel.shape
    oh = (x.shape[0] - kh) // stride + 1
    ow = (x.shape[1] - kw) // stride + 1
    out = np.zeros((oh, ow))

    for i in range(oh):
        for j in range(ow):
            patch = x[i * stride:i * stride + kh, j * stride:j * stride + kw]
            out[i, j] = np.sum(patch * kernel)
    return out`,
    points: ["パディングは端の情報を残し、出力サイズを調整する", "ストライドを大きくすると空間サイズは小さくなる", "フィルタ数は出力チャネル数に対応する"]
  },
  "Batch Normalization": {
    formula: "\\displaystyle y_i = \\gamma \\frac{x_i - \\mu_B}{\\sqrt{\\sigma_B^2 + \\epsilon}} + \\beta",
    detail: "BatchNormはミニバッチ統計量で中間表現を正規化し、スケールgammaとシフトbetaで表現力を戻します。学習時はバッチ平均・分散を使い、推論時は学習中に蓄積したrunning meanとrunning varianceを使います。",
    code: `def batch_norm_train(x, gamma, beta, eps=1e-5):
    mu = x.mean(axis=0, keepdims=True)
    var = x.var(axis=0, keepdims=True)
    x_hat = (x - mu) / np.sqrt(var + eps)
    out = gamma * x_hat + beta
    return out, mu, var`,
    points: ["学習時と推論時で統計量が違う", "gammaとbetaは学習可能パラメータ", "小さいバッチでは統計量が不安定になりやすい"]
  },
  "Layer Normalization": {
    formula: "\\displaystyle y = \\gamma \\frac{x - \\mu_{feature}}{\\sqrt{\\sigma_{feature}^2 + \\epsilon}} + \\beta",
    detail: "LayerNormは各サンプルごとに特徴次元で正規化します。バッチ方向を使わないため、系列モデルやTransformerのようにバッチサイズが変わりやすい場面で扱いやすいです。",
    code: `def layer_norm(x, gamma, beta, eps=1e-5):
    mu = x.mean(axis=-1, keepdims=True)
    var = x.var(axis=-1, keepdims=True)
    return gamma * (x - mu) / np.sqrt(var + eps) + beta`,
    points: ["バッチサイズに依存しにくい", "TransformerではPre-LN/Post-LNの違いも重要", "正規化する軸がBatchNormと異なる"]
  },
  "Adam": {
    formula: "\\displaystyle m_t=\\beta_1m_{t-1}+(1-\\beta_1)g_t,\\quad v_t=\\beta_2v_{t-1}+(1-\\beta_2)g_t^2",
    detail: "AdamはMomentumのような一次モーメントと、RMSPropのような二次モーメントを組み合わせた最適化手法です。初期値0による偏りを補正するため、m_hatとv_hatを使います。",
    code: `m = beta1 * m + (1 - beta1) * grad
v = beta2 * v + (1 - beta2) * grad**2
m_hat = m / (1 - beta1**t)
v_hat = v / (1 - beta2**t)
w -= lr * m_hat / (np.sqrt(v_hat) + eps)`,
    points: ["一次モーメントは勾配の移動平均", "二次モーメントは二乗勾配の移動平均", "AdamWではweight decayを更新式から分離する"]
  },
  "Scaled Dot-Product Attention": {
    formula: "\\displaystyle \\mathrm{Attention}(Q,K,V)=\\mathrm{softmax}\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right)V",
    detail: "AttentionはQueryとKeyの類似度から重みを作り、その重みでValueを加重平均します。sqrt(d_k)で割るのは、内積値が大きくなりsoftmaxが飽和することを防ぐためです。",
    code: `def attention(Q, K, V):
    d_k = Q.shape[-1]
    scores = Q @ K.T / np.sqrt(d_k)
    weights = softmax(scores)
    return weights @ V`,
    points: ["QとKで参照の強さを決める", "Vを重み付き和して出力する", "Transformerの中核演算"]
  },
  "Variational AutoEncoder": {
    formula: "\\displaystyle \\mathcal{L}=\\mathbb{E}_{q_\\phi(z|x)}[\\log p_\\theta(x|z)]-D_{KL}(q_\\phi(z|x)\\|p(z))",
    detail: "VAEは潜在変数を確率分布として学習する生成モデルです。再構成誤差だけでなく、潜在分布を標準正規分布などの事前分布に近づけるKL項を加えます。",
    code: `eps = np.random.randn(*mu.shape)
z = mu + np.exp(0.5 * log_var) * eps
kl = -0.5 * np.sum(1 + log_var - mu**2 - np.exp(log_var))
loss = recon_loss + kl`,
    points: ["再パラメータ化トリックで勾配を流す", "KL項が潜在空間を整える", "生成時は事前分布からzをサンプルする"]
  },
  "Graph Neural Network": {
    formula: "\\displaystyle h_v^{(k+1)}=\\mathrm{UPDATE}\\left(h_v^{(k)},\\mathrm{AGGREGATE}\\{h_u^{(k)}:u\\in\\mathcal{N}(v)\\}\\right)",
    detail: "GNNはグラフ構造を持つデータのためのニューラルネットです。ノード分類、リンク予測、グラフ分類などに使われます。中心は、隣接ノードから情報を集めてノード表現を更新するMessage Passingです。",
    code: `def gnn_layer(H, A, W):
    A_hat = A + np.eye(A.shape[0])
    D_inv = np.diag(1 / np.maximum(A_hat.sum(axis=1), 1))
    return relu(D_inv @ A_hat @ H @ W)`,
    points: ["ノード特徴Xと隣接行列Aを同時に使う", "層を重ねると遠いノード情報まで伝わる", "深すぎるとover-smoothingに注意する"]
  },
  "Message Passing": {
    formula: "\\displaystyle m_v=\\sum_{u\\in\\mathcal{N}(v)}M(h_v,h_u,e_{uv}),\\quad h_v'=U(h_v,m_v)",
    detail: "Message PassingはGNNを統一的に見る枠組みです。メッセージ関数、集約関数、更新関数をどう設計するかでGCN、GAT、GINなどの違いが生まれます。",
    code: `def message_passing(H, neighbors):
    next_H = []
    for v, ns in enumerate(neighbors):
        msg = np.sum([H[u] for u in ns], axis=0)
        next_H.append(relu(H[v] + msg))
    return np.stack(next_H)`,
    points: ["集約関数はノード順序に依存しない必要がある", "sum/mean/max/attentionが代表例", "エッジ特徴をメッセージに含める設計もある"]
  },
  "GCN": {
    formula: "\\displaystyle H^{(l+1)}=\\sigma\\left(\\hat{D}^{-1/2}\\hat{A}\\hat{D}^{-1/2}H^{(l)}W^{(l)}\\right)",
    detail: "GCNは隣接行列に自己ループを加え、次数行列で対称正規化してから特徴を伝播します。グラフ上の畳み込みとして理解でき、ノード分類の基本モデルとして重要です。",
    code: `def gcn_layer(A, H, W):
    n = A.shape[0]
    A_hat = A + np.eye(n)
    degree = A_hat.sum(axis=1)
    D_inv_sqrt = np.diag(1 / np.sqrt(degree))
    return relu(D_inv_sqrt @ A_hat @ D_inv_sqrt @ H @ W)`,
    points: ["Aに自己ループIを加える", "次数正規化でスケールを安定化する", "近傍を一様に集約するため重要度の違いは明示的に学習しない"]
  },
  "GAT": {
    formula: "\\displaystyle h_i'=\\sigma\\left(\\sum_{j\\in\\mathcal{N}(i)}\\alpha_{ij}Wh_j\\right)",
    detail: "GATは近傍ノードごとのAttention係数alpha_ijを学習します。GCNのように次数だけで重みを決めるのではなく、ノード特徴に応じて参照する近傍の強さを変えられます。",
    code: `def gat_scores(H, W, a):
    Z = H @ W
    scores = {}
    for i in range(len(Z)):
        for j in neighbors[i]:
            scores[(i, j)] = leaky_relu(a @ np.r_[Z[i], Z[j]])
    return scores`,
    points: ["近傍ごとの重要度をAttentionで学習する", "Multi-head化して表現を安定させることが多い", "大規模グラフではエッジ数に比例した計算量に注意する"]
  },
  "GIN": {
    formula: "\\displaystyle h_v'=\\mathrm{MLP}\\left((1+\\epsilon)h_v+\\sum_{u\\in\\mathcal{N}(v)}h_u\\right)",
    detail: "GINはグラフ構造の識別能力を重視したモデルです。近傍特徴をsumで集約し、自己特徴をepsで調整してMLPへ渡します。グラフ分類でよく出てきます。",
    code: `def gin_layer(H, neighbors, eps):
    out = []
    for v, ns in enumerate(neighbors):
        agg = np.sum([H[u] for u in ns], axis=0)
        out.append(mlp((1 + eps) * H[v] + agg))
    return np.stack(out)`,
    points: ["sum集約は多重集合の情報を保持しやすい", "epsは固定または学習可能", "WLテストとの関係で表現力が説明される"]
  },
  "GVAE": {
    formula: "\\displaystyle q_\\phi(Z|X,A),\\quad p_\\theta(A|Z)=\\sigma(ZZ^\\top),\\quad \\mathcal{L}=\\mathcal{L}_{recon}+D_{KL}",
    detail: "GVAEはGraph AutoEncoderにVAEの確率的潜在変数を加えたモデルです。GCNなどのエンコーダでmuとlog_varを出し、潜在表現Zからリンク確率や隣接行列を再構成します。",
    code: `mu = gcn_mu(A, X)
log_var = gcn_logvar(A, X)
eps = np.random.randn(*mu.shape)
Z = mu + np.exp(0.5 * log_var) * eps
A_logits = Z @ Z.T
kl = -0.5 * np.sum(1 + log_var - mu**2 - np.exp(log_var))`,
    points: ["リンク予測やグラフ生成の入口になる", "内積デコーダではZZ^Tから隣接確率を作る", "VAE同様に再構成項とKL項を最適化する"]
  }
};

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function slugifyTerm(title) {
  return encodeURIComponent(title.replace(/\s+/g, "-").toLowerCase());
}

function getFormulaForConcept(concept) {
  const formulas = {
    "教師あり学習": "\\displaystyle \\theta^*=\\arg\\min_\\theta\\frac{1}{N}\\sum_{i=1}^{N}L(f_\\theta(x_i),y_i)",
    "教師なし学習": "\\displaystyle \\theta^*=\\arg\\min_\\theta L(X;\\theta)\\quad(y\\text{を使用しない})",
    "半教師あり学習": "\\displaystyle L=L_{labeled}+\\lambda L_{unlabeled}",
    "自己教師あり学習": "\\displaystyle L_{contrast}=-\\log\\frac{e^{sim(z_i,z_j)/\\tau}}{\\sum_k e^{sim(z_i,z_k)/\\tau}}",
    "強化学習": "\\displaystyle Q(s,a)\\leftarrow Q(s,a)+\\alpha[r+\\gamma\\max_{a'}Q(s',a')-Q(s,a)]",
    "線形回帰": "\\displaystyle \\hat{y}=Xw+b,\\quad \\hat{w}=(X^TX)^{-1}X^Ty",
    "ロジスティック回帰": "\\displaystyle P(y=1|x)=\\sigma(w^Tx+b)",
    "Support Vector Machine": "\\displaystyle \\min_{w,b}\\frac{1}{2}\\|w\\|^2+C\\sum_i\\max(0,1-y_i(w^Tx_i+b))",
    "Decision Tree": "\\displaystyle Gini=1-\\sum_{k=1}^{K}p_k^2",
    "Random Forest": "\\displaystyle \\hat{y}=\\mathrm{mode}(T_1(x),\\ldots,T_B(x))",
    "k-Nearest Neighbors": "\\displaystyle \\hat{y}=\\mathrm{mode}\\{y_i:i\\in N_k(x)\\}",
    "Naive Bayes": "\\displaystyle P(y|x_1,\\ldots,x_d)\\propto P(y)\\prod_{j=1}^{d}P(x_j|y)",
    "Gradient Boosting": "\\displaystyle F_m(x)=F_{m-1}(x)+\\eta h_m(x)",
    "k-means": "\\displaystyle J=\\sum_{i=1}^{N}\\|x_i-\\mu_{c_i}\\|_2^2",
    "Principal Component Analysis": "\\displaystyle W^*=\\arg\\max_{W^TW=I}\\mathrm{tr}(W^T\\Sigma W)",
    "reshapeとtranspose": "\\displaystyle (d_1,\\ldots,d_n)\\to(d'_1,\\ldots,d'_m),\\quad\\prod_i d_i=\\prod_j d'_j",
    "concatenateとstack": "\\displaystyle concat:(n,d)+(m,d)\\to(n+m,d),\\quad stack:(n,d)^k\\to(k,n,d)",
    "whereとargsort": "\\displaystyle y_i=\\begin{cases}a_i&c_i\\\\b_i&\\neg c_i\\end{cases}",
    "pivot_table": "\\displaystyle table_{g,c}=AGG\\{x_i:G_i=g,C_i=c\\}",
    "rollingと時系列集計": "\\displaystyle MA_t^{(w)}=\\frac{1}{w}\\sum_{i=0}^{w-1}x_{t-i}",
    "ポアソン分布": "\\displaystyle P(X=k)=e^{-\\lambda}\\frac{\\lambda^k}{k!}",
    "指数分布": "\\displaystyle f(x)=\\lambda e^{-\\lambda x},\\quad x\\ge0",
    "一様分布": "\\displaystyle f(x)=\\frac{1}{b-a},\\quad a\\le x\\le b",
    "ベータ分布": "\\displaystyle f(x)=\\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{B(\\alpha,\\beta)}",
    "ガンマ分布": "\\displaystyle f(x)=\\frac{x^{k-1}e^{-x/\\theta}}{\\Gamma(k)\\theta^k}",
    "t分布とカイ二乗分布": "\\displaystyle T=\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}},\\quad \\chi^2=\\sum_{i=1}^{\\nu}Z_i^2",
    "ヒストグラムと分布形状": "\\displaystyle c_j=\\sum_{i=1}^{N}\\mathbf{1}[b_j\\le x_i<b_{j+1}]",
    "箱ひげ図と四分位範囲": "\\displaystyle IQR=Q_3-Q_1,\\quad [Q_1-1.5IQR,\\ Q_3+1.5IQR]",
    "標準化と正規化": "\\displaystyle z=\\frac{x-\\mu_{train}}{\\sigma_{train}},\\quad x'=\\frac{x-x_{min}}{x_{max}-x_{min}}",
    "カテゴリ変数エンコーディング": "\\displaystyle x_c\\mapsto (\\mathbf{1}[c=c_1],\\ldots,\\mathbf{1}[c=c_K])",
    "データ分割とリーク防止": "\\displaystyle \\mu=\\mathrm{mean}(X_{train}),\\quad X_{valid}'=(X_{valid}-\\mu)/\\sigma",
    "転移学習とFine-tuning": "\\displaystyle \\theta_{head}^*=\\arg\\min L(f_{head}(f_{backbone}(x)),y)",
    "Mixed Precision Training": "\\displaystyle g_{scaled}=S\\cdot g,\\quad g=g_{scaled}/S",
    "Knowledge Distillation": "\\displaystyle L=\\alpha L_{hard}+(1-\\alpha)T^2D_{KL}(p_T^T\\|p_S^T)",
    "Data Augmentation": "\\displaystyle (x,y)\\mapsto (T(x),y),\\quad T\\sim\\mathcal{T}",
    "スライス": "\\displaystyle x[a:b:s]=(x_a,x_{a+s},x_{a+2s},\\ldots),\\quad i<b",
    "ブロードキャスト": "\\displaystyle (m,n)+(n)\\longrightarrow(m,n)",
    "np.dotと行列積": "\\displaystyle C_{ij}=\\sum_{k=1}^{d}A_{ik}B_{kj}",
    "axisとkeepdims": "\\displaystyle \\mu_j=\\frac{1}{N}\\sum_{i=1}^{N}x_{ij},\\quad X-\\mu\\in\\mathbb{R}^{N\\times d}",
    "Boolean Indexing": "\\displaystyle X_M=\\{x_i\\mid M_i=\\mathrm{True}\\}",
    "DataFrameとSeries": "\\displaystyle \\mathrm{DataFrame}=[S_1,S_2,\\ldots,S_p]",
    "groupbyと集約": "\\displaystyle \\bar{x}_g=\\frac{1}{n_g}\\sum_{i:G_i=g}x_i",
    "mergeとjoin": "\\displaystyle R=L\\bowtie_{L.key=R.key}R",
    "欠損値処理": "\\displaystyle x_i'=\\begin{cases}x_i & x_i\\neq NaN\\\\\\tilde{x}_{train} & x_i=NaN\\end{cases}",
    "期待値と分散": "\\displaystyle \\mathbb{E}[X]=\\sum_x xp(x),\\quad \\mathrm{Var}(X)=\\mathbb{E}[(X-\\mathbb{E}[X])^2]",
    "共分散と相関係数": "\\displaystyle \\mathrm{Cov}(X,Y)=\\mathbb{E}[(X-\\mu_X)(Y-\\mu_Y)],\\quad \\rho=\\frac{\\mathrm{Cov}(X,Y)}{\\sigma_X\\sigma_Y}",
    "ベルヌーイ分布と二項分布": "\\displaystyle P(X=x)=p^x(1-p)^{1-x},\\quad P(K=k)={n\\choose k}p^k(1-p)^{n-k}",
    "正規分布": "\\displaystyle f(x)=\\frac{1}{\\sqrt{2\\pi\\sigma^2}}\\exp\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)",
    "ベイズの定理": "\\displaystyle P(A|B)=\\frac{P(B|A)P(A)}{P(B)}",
    "中心極限定理": "\\displaystyle \\frac{\\sqrt{n}(\\bar{X}_n-\\mu)}{\\sigma}\\xrightarrow{d}\\mathcal{N}(0,1)",
    "偏微分と勾配": "\\displaystyle \\nabla_w L=\\left[\\frac{\\partial L}{\\partial w_1},\\ldots,\\frac{\\partial L}{\\partial w_n}\\right]",
    "連鎖律": "\\displaystyle \\frac{\\partial z}{\\partial x}=\\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial x}",
    "エントロピー": "\\displaystyle H(p)=-\\sum_x p(x)\\log p(x)",
    "KLダイバージェンス": "\\displaystyle D_{KL}(p\\|q)=\\sum_x p(x)\\log\\frac{p(x)}{q(x)}",
    "最尤推定": "\\displaystyle \\hat{\\theta}=\\arg\\max_\\theta \\prod_{i=1}^N p(x_i|\\theta)",
    "Softmax": "\\displaystyle \\mathrm{softmax}(z_i)=\\frac{e^{z_i}}{\\sum_j e^{z_j}}",
    "交差エントロピー": "\\displaystyle L=-\\sum_{k=1}^{K}y_k\\log \\hat{y}_k",
    "誤差逆伝播": "\\displaystyle \\frac{\\partial L}{\\partial W}=\\frac{\\partial L}{\\partial y}\\frac{\\partial y}{\\partial W}",
    "Batch Gradient Descent": "\\displaystyle \\theta_{t+1}=\\theta_t-\\eta\\nabla_\\theta L(\\theta;X)",
    "Stochastic Gradient Descent": "\\displaystyle \\theta_{t+1}=\\theta_t-\\eta\\nabla_\\theta L(\\theta;x_i,y_i)",
    "Momentum": "\\displaystyle v_t=\\mu v_{t-1}-\\eta g_t,\\quad \\theta_{t+1}=\\theta_t+v_t",
    "Nesterov Momentum": "\\displaystyle g_t=\\nabla L(\\theta_t+\\mu v_{t-1}),\\quad v_t=\\mu v_{t-1}-\\eta g_t",
    "AdaGrad": "\\displaystyle \\theta_{t+1}=\\theta_t-\\frac{\\eta}{\\sqrt{G_t}+\\epsilon}g_t",
    "RMSProp": "\\displaystyle E[g^2]_t=\\rho E[g^2]_{t-1}+(1-\\rho)g_t^2",
    "Gradient Clipping": "\\displaystyle g'=g\\cdot\\frac{c}{\\max(c,\\|g\\|_2)}",
    "Learning Rate Scheduler": "\\displaystyle \\eta_t=\\eta_{min}+\\frac{1}{2}(\\eta_{max}-\\eta_{min})(1+\\cos(\\pi t/T))",
    "L1正則化": "\\displaystyle L'=L+\\lambda\\sum_i |w_i|",
    "L2正則化": "\\displaystyle L'=L+\\lambda\\sum_i w_i^2",
    "Weight Decay": "\\displaystyle w_{t+1}=w_t-\\eta\\nabla L(w_t)-\\eta\\lambda w_t",
    "Instance Normalization": "\\displaystyle y_{nchw}=\\gamma_c\\frac{x_{nchw}-\\mu_{nc}}{\\sqrt{\\sigma_{nc}^2+\\epsilon}}+\\beta_c",
    "Group Normalization": "\\displaystyle y=\\gamma\\frac{x-\\mu_{group}}{\\sqrt{\\sigma_{group}^2+\\epsilon}}+\\beta",
    "Dropout": "\\displaystyle \\tilde{h}=\\frac{m\\odot h}{1-p},\\quad m_i\\sim\\mathrm{Bernoulli}(1-p)",
    "Spatial Dropout": "\\displaystyle \\tilde{X}_{nchw}=\\frac{M_{nc}\\,X_{nchw}}{1-p}",
    "Depthwise Separable Convolution": "\\displaystyle k^2C_{in}+C_{in}C_{out}\\ll k^2C_{in}C_{out}",
    "Residual Connection": "\\displaystyle y=F(x)+x",
    "RNN": "\\displaystyle h_t=\\tanh(W_xx_t+W_hh_{t-1}+b)",
    "LSTM": "\\displaystyle c_t=f_t\\odot c_{t-1}+i_t\\odot \\tilde{c}_t,\\quad h_t=o_t\\odot\\tanh(c_t)",
    "GRU": "\\displaystyle h_t=(1-z_t)\\odot h_{t-1}+z_t\\odot\\tilde{h}_t",
    "Multi-Head Attention": "\\displaystyle \\mathrm{MHA}(Q,K,V)=\\mathrm{Concat}(head_1,\\ldots,head_h)W^O",
    "Positional Encoding": "\\displaystyle PE_{pos,2i}=\\sin\\left(\\frac{pos}{10000^{2i/d}}\\right),\\quad PE_{pos,2i+1}=\\cos\\left(\\frac{pos}{10000^{2i/d}}\\right)",
    "Pre-LN Transformer": "\\displaystyle x'=x+\\mathrm{Sublayer}(\\mathrm{LayerNorm}(x))",
    "AutoEncoder": "\\displaystyle z=f_\\phi(x),\\quad \\hat{x}=g_\\theta(z),\\quad L=\\|x-\\hat{x}\\|^2",
    "GAN": "\\displaystyle \\min_G\\max_D\\mathbb{E}_{x\\sim p_{data}}[\\log D(x)]+\\mathbb{E}_{z\\sim p_z}[\\log(1-D(G(z)))]",
    "Precision / Recall / F1": "\\displaystyle Precision=\\frac{TP}{TP+FP},\\quad Recall=\\frac{TP}{TP+FN},\\quad F1=\\frac{2PR}{P+R}",
    "ROC-AUC": "\\displaystyle TPR=\\frac{TP}{TP+FN},\\quad FPR=\\frac{FP}{FP+TN}"
  };

  return formulas[concept.title] || "\\displaystyle y=f_\\theta(x),\\quad L=L(y,\\hat{y}),\\quad \\theta\\leftarrow\\theta-\\eta\\nabla_\\theta L";
}

function getDetailedExplanation(concept) {
  const explanations = {
    "数学": "数学系の用語は、式そのものを暗記するよりも、どの変数に対して微分しているか、確率分布のどちらを基準にしているか、損失関数として最小化すると何が起きるかを追うことが大切です。実装では、ベクトル化した計算のshapeが数式の添字と対応します。",
    "最適化": "最適化手法は、勾配をそのまま使うのか、過去の勾配を蓄積するのか、二乗勾配で更新量を調整するのかが違いになります。E資格では更新式だけでなく、学習率が大きい場合、小さい場合、初期ステップのバイアス補正まで説明できると強いです。",
    "正規化": "正規化層は、どの軸で平均・分散を計算するかが本質です。BatchNormはバッチ方向、LayerNormは特徴方向、InstanceNormはサンプルとチャネルごとの空間方向、GroupNormはチャネルグループごとに正規化します。学習時と推論時の統計量の違いにも注意します。",
    "正則化": "正則化は、モデルが訓練データに過度に適合するのを抑えるための仕組みです。重みに罰則を加える方法、ユニットを確率的に落とす方法、早期終了のように学習過程を制御する方法があります。",
    "CNN": "CNN系の用語では、入力サイズ、カーネルサイズ、パディング、ストライド、チャネル数がどのように出力shapeとパラメータ数に影響するかを追うことが重要です。重み共有と局所受容野が全結合との大きな違いです。",
    "系列": "系列モデルでは、時刻方向に状態を伝えるため、勾配が時間方向に何度も伝播します。RNN、LSTM、GRUの違いは、過去情報をどのゲートで保持・忘却するかにあります。",
    "Attention": "Attentionでは、QueryとKeyから参照重みを作り、Valueを重み付き和します。どのテンソルが系列長方向を持つか、softmaxをどの軸にかけるか、maskがどこで入るかが実装上の要点です。",
    "Transformer": "TransformerはAttention、残差接続、LayerNorm、MLPブロックの組み合わせです。EncoderとDecoderの違い、Masked Self-Attention、Pre-LN/Post-LNの違いを構造として説明できるようにします。",
    "生成モデル": "生成モデルでは、データ分布をどう近似するかが中心です。AEは再構成、VAEは潜在分布とKL項、GANは生成器と識別器のゲームとして理解します。",
    "GNN": "GNNでは、ノード特徴とグラフ構造を同時に扱います。近傍から何を集約するか、集約がノード順序に依存しないか、層を重ねたときに何ホップ先まで情報が届くかが重要です。",
    "評価": "評価指標は、どの誤りを重く見るかによって使い分けます。不均衡データではAccuracyだけでは危険で、Precision、Recall、F1、ROC-AUCなどをタスクの目的に合わせて選びます。",
    "実装": "実装系の用語では、数値安定性、shape、ブロードキャスト、勾配の流れ、計算量を確認します。短い式でも、実際の配列操作に落とすとバグが出やすい領域です。"
  };

  return `${concept.body} ${explanations[concept.category] || "この用語は、数式、データのshape、学習時の挙動、推論時の挙動を分けて理解すると実装に結び付きます。"}`;
}

function getAnswerGuide(concept) {
  const guides = {
    "Batch Gradient Descent": [
      "学習率が大きい場合は、1回の更新でパラメータが大きく動きます。最適点を飛び越えて損失が振動したり、発散したりすることがあります。",
      "学習率が小さい場合は、更新が慎重になります。安定しやすい一方で収束が遅く、限られたエポックでは十分に学習できないことがあります。",
      "Batch Gradient Descentは全データで勾配を計算するため、更新方向は安定しやすいですが、1ステップの計算コストが大きいです。式では \\(\\eta\\) が学習率、\\(\\nabla_\\theta L\\) が損失を増やす方向なので、マイナス方向へ更新します。"
    ],
    "Adam": [
      "Adamは勾配の移動平均である一次モーメントと、二乗勾配の移動平均である二次モーメントを使います。",
      "初期値を0にすると、学習初期の移動平均が小さく偏ります。そのため \\(\\hat{m}_t=m_t/(1-\\beta_1^t)\\)、\\(\\hat{v}_t=v_t/(1-\\beta_2^t)\\) のようにバイアス補正します。",
      "説明するときは、Momentumの考え方とRMSPropの考え方を合わせた手法、と言えると理解が伝わりやすいです。"
    ],
    "Batch Normalization": [
      "BatchNormは学習時にミニバッチの平均と分散で正規化します。推論時は学習中に蓄積したrunning meanとrunning varianceを使います。",
      "平均・分散を計算する軸は重要です。全結合ではバッチ方向、CNNでは通常N,H,W方向を使い、チャネルごとに正規化します。",
      "gammaとbetaは、正規化で失われる可能性のあるスケールとシフトを学習し直すためのパラメータです。"
    ],
    "GCN": [
      "GCNは自己ループを加えた隣接行列 \\(\\hat{A}=A+I\\) を使い、次数行列で \\(\\hat{D}^{-1/2}\\hat{A}\\hat{D}^{-1/2}\\) と正規化します。",
      "正規化する理由は、次数の大きいノードほど集約値が大きくなりすぎるのを防ぎ、特徴量のスケールを安定させるためです。",
      "GCNは近傍を一様な重みで集約するので、近傍ごとの重要度を学習したい場合はGATが候補になります。"
    ],
    "GAT": [
      "GATは近傍ノードごとにAttention係数 \\(\\alpha_{ij}\\) を計算し、重要な近傍を強く集約します。",
      "GCNが次数正規化で重みを決めるのに対し、GATはノード特徴から重みを学習する点が違います。",
      "Multi-headにすると、複数の観点から近傍関係を見られ、学習が安定しやすくなります。"
    ]
  };

  const examples = {
    "Python": "例えばスライスなら、x[2:8:2]がindex 2,4,6を返すこと、stopの8は含まれないことまで示します。",
    "NumPy": "例えばshapeを実際に書き、演算前後で(32, 10)がどう変わるかを確認すると説明が具体的になります。",
    "Pandas": "例えばtrainだけで中央値を計算してvalidへ適用する流れを示すと、処理とデータリーク防止を同時に説明できます。",
    "統計": "小さな数値例を置き、式へ代入して得られる値を示すと、定義と解釈がつながります。",
    "確率分布": "その分布が表す現象、パラメータ、期待値、分散、具体的な利用例を順に述べます。",
    "前処理": "fitはtrainだけ、transformはtrain・valid・testへ同じ設定で行う、という処理順まで説明します。",
    "最適化": "更新式の各項が更新方向と更新量へどう効くかを、学習率が大きい場合と小さい場合で比較します。",
    "正規化": "入力shapeと平均・分散を取る軸を明示し、学習時と推論時の違いも示します。",
    "CNN": "入力shape、カーネル、stride、paddingから出力shapeとパラメータ数を実際に計算します。",
    "系列": "時刻tの入力、過去状態、次状態を式とshapeで示し、勾配が時間方向へ流れることを説明します。",
    "Attention": "Q・K・Vのshape、QK^Tのshape、softmaxをかける軸を具体的に書きます。",
    "Transformer": "Attention、残差接続、LayerNorm、MLPを通る順番と、Encoder/Decoderの役割を説明します。",
    "生成モデル": "入力から潜在表現、再構成または生成結果までを追い、損失の各項が何を要求するかを説明します。",
    "GNN": "対象ノードと近傍ノードを小さなグラフで示し、1層で何ホップの情報が集約されるかを説明します。",
    "深層学習技術": "通常学習との違い、導入目的、学習ループのどこに処理を加えるか、得られる利点と副作用を説明します。",
    "評価": "混同行列や予測確率の具体例から指標を計算し、どの種類の誤りを重視する指標かを説明します。"
  };
  const points = termStudyPoints[concept.title] || [];

  return guides[concept.title] || [
    `${concept.title}とは、${concept.body}`,
    examples[concept.category] || `具体的な入力例を置き、${concept.title}の処理前後で値や表現がどう変わるかを説明します。`,
    points.length > 0
      ? `試験では特に「${points.join("」「")}」を区別して答えます。`
      : `${concept.title}を使う目的、前提条件、利点、注意点を具体例とともに答えます。`
  ];
}

const termStudyPoints = {
  "教師あり学習": ["入力と正解ラベルの対応を使う", "回帰と分類を区別する", "未知データで汎化性能を評価する"],
  "教師なし学習": ["正解ラベルを使わない", "クラスタリングと次元削減を区別する", "結果の評価方法をタスクごとに考える"],
  "半教師あり学習": ["ラベル付きと未ラベルの損失を分ける", "Pseudo Labelの誤り増幅に注意する", "confidence thresholdを理解する"],
  "自己教師あり学習": ["監督信号をデータ自身から作る", "pretext taskとdownstream taskを区別する", "contrastive/masked modelingの違いを説明する"],
  "強化学習": ["状態・行動・報酬・方策を定義する", "即時報酬と累積報酬を区別する", "探索と活用のトレードオフを説明する"],
  "線形回帰": ["最小二乗と正規方程式を説明する", "残差の仮定を確認する", "多重共線性に注意する"],
  "ロジスティック回帰": ["出力はクラス1の確率", "log-oddsが入力の線形関数", "閾値でクラスへ変換する"],
  "Support Vector Machine": ["マージン最大化を説明する", "Support Vectorが境界を決める", "Kernel TrickとCの役割を理解する"],
  "Decision Tree": ["不純度減少で分割を選ぶ", "深さを増やすと過学習しやすい", "数値・カテゴリ特徴の分割を理解する"],
  "Random Forest": ["Bootstrapと特徴量サブサンプリングを使う", "木同士の相関を下げる", "Out-of-Bag評価を説明する"],
  "k-Nearest Neighbors": ["距離尺度とkを選ぶ", "特徴量スケールの影響が大きい", "推論時に訓練データとの距離計算が必要"],
  "Naive Bayes": ["クラス条件付き独立を仮定する", "確率積はlog空間で計算する", "テキスト分類で使われる理由を説明する"],
  "Gradient Boosting": ["弱学習器を逐次追加する", "残差または負の勾配へfitする", "学習率と木の数の関係を理解する"],
  "k-means": ["割当と重心更新を反復する", "クラスタ数Kを事前に決める", "初期値と外れ値に敏感"],
  "Principal Component Analysis": ["中心化してから共分散またはSVDを使う", "主成分は互いに直交する", "説明分散比で次元数を選ぶ"],
  "reshapeとtranspose": ["reshapeは要素数を保つ", "transposeは軸順序を変える", "連続メモリとview/copyに注意する"],
  "concatenateとstack": ["concatenateは既存軸", "stackは新規軸", "連結しない軸のshapeを揃える"],
  "whereとargsort": ["whereは条件ごとの値選択", "argsortは値でなくindexを返す", "Top-kでは並び順を確認する"],
  "pivot_table": ["index/columns/values/aggfuncを区別する", "重複組み合わせは集約される", "欠損セルの扱いを確認する"],
  "rollingと時系列集計": ["窓に未来値を含めない", "windowとmin_periodsを設定する", "shiftを使ったlag特徴を理解する"],
  "ポアソン分布": ["回数を表す離散分布", "期待値と分散はいずれもλ", "独立かつ一定発生率の仮定を確認する"],
  "指数分布": ["待ち時間を表す連続分布", "無記憶性を持つ", "平均は1/λ"],
  "一様分布": ["区間内で密度が一定", "平均(a+b)/2を説明する", "離散一様と連続一様を区別する"],
  "ベータ分布": ["0から1の確率を表す", "αとβで形状が変わる", "ベルヌーイ/二項尤度の共役事前分布"],
  "ガンマ分布": ["正の連続値を表す", "形状と尺度パラメータを区別する", "指数分布との関係を説明する"],
  "t分布とカイ二乗分布": ["t分布は正規分布より裾が厚い", "自由度が増えると正規分布へ近づく", "カイ二乗は分散推定・適合度検定に使う"],
  "ヒストグラムと分布形状": ["ビン幅で見え方が変わる", "右歪み・左歪み・多峰性を読む", "ヒストグラムの高さと確率密度を区別する"],
  "箱ひげ図と四分位範囲": ["箱はQ1からQ3、中央線は中央値", "IQRは外れ値に比較的頑健", "ひげの定義は描画ライブラリで確認する"],
  "標準化と正規化": ["統計量は訓練データだけで推定する", "外れ値がMin-Maxに与える影響を理解する", "標準化後も分布形状は正規分布になるとは限らない"],
  "カテゴリ変数エンコーディング": ["名義尺度に不自然な大小関係を入れない", "未知カテゴリの扱いを決める", "Target Encodingはリーク防止のためfold外統計を使う"],
  "データ分割とリーク防止": ["testは最終評価まで触らない", "時系列は未来から過去へ情報を漏らさない", "前処理器もtrainだけでfitする"],
  "転移学習とFine-tuning": ["凍結と全層更新を使い分ける", "backboneには小さい学習率を使うことが多い", "BatchNormのtrain/eval状態にも注意する"],
  "Mixed Precision Training": ["FP16のunderflowをLoss Scalingで抑える", "BF16は指数部が広くLoss Scaling不要な場合が多い", "一部演算はFP32で実行される"],
  "Knowledge Distillation": ["温度Tを上げてクラス間関係を滑らかにする", "soft lossとhard label lossを組み合わせる", "T^2で勾配スケールを補正する"],
  "Data Augmentation": ["ラベルを保持する変換を選ぶ", "検証・テストにはランダム拡張を適用しない", "Mixup/CutMixではラベルも混合する"],
  "スライス": ["startは含みstopは含まない", "負のindexとstepを説明する", "NumPyスライスはビューになり得る点に注意する"],
  "ブロードキャスト": ["末尾の次元から互換性を判定する", "次元が同じか片方が1なら拡張できる", "意図しない巨大配列生成やshapeミスに注意する"],
  "np.dotと行列積": ["1次元と2次元で意味が変わる", "行列積では内側の次元を一致させる", "高次元ではnp.matmulやeinsumとの違いを確認する"],
  "axisとkeepdims": ["axisは消える軸を指定する", "keepdims=Trueでブロードキャスト可能なshapeを保つ", "BatchNormなどの正規化軸と結び付ける"],
  "Boolean Indexing": ["比較演算でbool maskを作る", "mask shapeと対象配列のshapeを合わせる", "抽出結果はコピーになることが多い"],
  "DataFrameとSeries": ["indexとcolumnsによるラベル整列を理解する", "列ごとにdtypeを持てる", "NumPy配列へ変換すると型が統一される点に注意する"],
  "groupbyと集約": ["split-apply-combineとして説明する", "aggで複数統計量を同時に計算する", "group keyがindexになる場合を確認する"],
  "mergeとjoin": ["innerとleftの行数の違いを説明する", "キー重複で行数が増えることに注意する", "validate引数で結合関係を検査する"],
  "欠損値処理": ["欠損の発生機構を考える", "補完値は訓練データだけから推定する", "欠損フラグ自体が特徴になる場合を理解する"],
  "期待値と分散": ["離散分布と連続分布の定義を使い分ける", "Var(X)=E[X^2]-E[X]^2も導ける", "標本分散ではddof=1を使う理由を理解する"],
  "共分散と相関係数": ["共分散は単位に依存する", "相関係数は-1から1に正規化される", "相関は因果を意味しない"],
  "ベルヌーイ分布と二項分布": ["ベルヌーイは1試行、二項はn試行の成功回数", "期待値npと分散np(1-p)を説明する", "独立試行の仮定を確認する"],
  "正規分布": ["平均が位置、分散が広がりを決める", "標準化z=(x-mu)/sigmaを説明する", "標準偏差と分散を混同しない"],
  "ベイズの定理": ["事前・尤度・周辺尤度・事後を区別する", "条件付き確率の向きを反転する", "事後は尤度×事前に比例すると説明する"],
  "中心極限定理": ["元分布が正規分布でなくても標本平均へ適用できる", "対象は個々の観測値ではなく標本平均の分布", "標準誤差がsigma/sqrt(n)になる"],
  "偏微分と勾配": ["どの変数で微分しているかを明確にする", "勾配は損失が増える方向なので更新は逆向き", "ベクトル化した実装ではshapeを確認する"],
  "連鎖律": ["合成関数の局所微分を掛け合わせる", "誤差逆伝播の中心原理として説明する", "計算グラフ上で上流勾配と局所勾配を分ける"],
  "エントロピー": ["不確実性の大きさを表す", "確率が偏るほど小さく一様に近いほど大きい", "交差エントロピーとの違いを説明する"],
  "KLダイバージェンス": ["非対称で距離関数ではない", "2つの分布のずれを測る", "VAEや知識蒸留でどの分布を近づけるかを確認する"],
  "最尤推定": ["尤度最大化と負の対数尤度最小化を対応させる", "独立同分布なら尤度は積になる", "分類の交差エントロピーと結び付ける"],
  "Softmax": ["ロジットを確率分布に変換する", "最大値を引く数値安定化を説明する", "softmaxをかける軸を確認する"],
  "交差エントロピー": ["正解クラスの確率が低いほど損失が大きい", "one-hotラベルと負の対数尤度を対応させる", "softmaxと組み合わせた実装を理解する"],
  "誤差逆伝播": ["上流勾配と局所勾配を分けて考える", "連鎖律を計算グラフに適用する", "各層で必要な中間値を保存する理由を理解する"],
  "Batch Gradient Descent": ["全データで1回の勾配を計算する", "更新は安定しやすいが計算が重い", "学習率が大きい場合と小さい場合を説明する"],
  "Stochastic Gradient Descent": ["ミニバッチで勾配を近似する", "勾配ノイズがあるため更新が揺れる", "バッチサイズと汎化性能の関係を意識する"],
  "Momentum": ["速度ベクトルに過去の勾配を蓄積する", "谷方向の振動を抑えやすい", "更新式の符号を間違えない"],
  "Nesterov Momentum": ["先回りした位置で勾配を見る", "通常のMomentumより早めに減速できる", "lookahead位置の意味を説明する"],
  "AdaGrad": ["二乗勾配の累積で学習率を調整する", "頻出特徴の更新が小さくなる", "後半に学習率が小さくなりすぎる弱点を説明する"],
  "RMSProp": ["二乗勾配の指数移動平均を使う", "AdaGradの単調減少問題を緩和する", "rhoが移動平均の滑らかさを決める"],
  "Adam": ["一次モーメントと二次モーメントを使う", "初期ステップではバイアス補正が必要", "AdamWとのWeight Decayの違いを説明する"],
  "Gradient Clipping": ["勾配ノルムが閾値を超えたときだけ縮小する", "勾配爆発対策として使う", "勾配方向を保ったまま大きさを抑える"],
  "Learning Rate Scheduler": ["学習率を固定せず段階的または連続的に変える", "warmupやcosine decayの目的を説明する", "optimizer.stepとscheduler.stepの順序に注意する"],
  "L1正則化": ["重みの絶対値和に罰則を与える", "スパースな重みになりやすい", "0付近で微分不能な点を意識する"],
  "L2正則化": ["重みの二乗和に罰則を与える", "大きな重みを滑らかに抑える", "Weight Decayとの関係を説明する"],
  "Weight Decay": ["更新時に重みを直接縮小する", "AdamWでは勾配更新と分離する", "L2正則化と完全に同じでない場合を説明する"],
  "Batch Normalization": ["バッチ方向の平均分散で正規化する", "学習時と推論時で統計量が異なる", "gammaとbetaで表現力を戻す"],
  "Layer Normalization": ["特徴次元で正規化する", "バッチサイズに依存しにくい", "Transformerでよく使われる理由を説明する"],
  "Instance Normalization": ["サンプル・チャネルごとに空間方向を正規化する", "スタイル情報の扱いと関係が深い", "BatchNormとの軸の違いを説明する"],
  "Group Normalization": ["チャネルをグループに分けて正規化する", "小バッチでも使いやすい", "LayerNormとInstanceNormの中間的性質を理解する"],
  "Dropout": ["学習時だけユニットを確率的に落とす", "inverted dropoutのスケール補正を説明する", "推論時にDropoutを無効化する理由を理解する"],
  "Spatial Dropout": ["特徴マップ単位でDropoutする", "CNNの空間相関を考慮する", "通常Dropoutとのmask shapeの違いを確認する"],
  "畳み込み": ["出力サイズ計算を確実にする", "重み共有と局所受容野を説明する", "フィルタ数と出力チャネル数の関係を見る"],
  "Depthwise Separable Convolution": ["DepthwiseとPointwiseを分けて説明する", "通常畳み込みとのパラメータ数を比較する", "MobileNetで使われる理由を理解する"],
  "Residual Connection": ["恒等写像の経路で勾配を通しやすくする", "入力と出力のshapeを合わせる必要がある", "深いネットワークの劣化問題と結び付ける"],
  "RNN": ["隠れ状態を時刻方向に受け渡す", "BPTTで勾配消失・爆発が起きやすい", "系列長が計算量に効く"],
  "LSTM": ["入力・忘却・出力ゲートを説明する", "セル状態が長期記憶を担う", "忘却ゲートの役割を式で説明する"],
  "GRU": ["更新ゲートとリセットゲートを説明する", "LSTMより構造が簡潔", "候補状態と過去状態の混ぜ方を見る"],
  "Scaled Dot-Product Attention": ["QK^Tで参照スコアを作る", "sqrt(d_k)でsoftmax飽和を抑える", "softmaxの軸を確認する"],
  "Multi-Head Attention": ["複数ヘッドで異なる関係を捉える", "headをconcatして出力射影する", "ヘッド数とd_modelの関係を確認する"],
  "Positional Encoding": ["Self-Attention単体には順序情報がない", "sin/cosで位置を連続的に表す", "学習型位置埋め込みとの違いを説明する"],
  "Pre-LN Transformer": ["LayerNormをサブレイヤー前に置く", "深いTransformerで勾配が安定しやすい", "Post-LNとの違いを説明する"],
  "AutoEncoder": ["再構成誤差を最小化する", "潜在表現の次元と情報圧縮を意識する", "異常検知での使い方を説明する"],
  "Variational AutoEncoder": ["再構成項とKL項を分ける", "再パラメータ化トリックを説明する", "潜在空間を確率分布として扱う"],
  "GAN": ["生成器と識別器のミニマックスを説明する", "モード崩壊を理解する", "識別器が強すぎる場合の問題を説明する"],
  "Graph Neural Network": ["ノード特徴と隣接構造を同時に使う", "何ホップ先まで情報が届くかを見る", "over-smoothingに注意する"],
  "Message Passing": ["メッセージ・集約・更新に分ける", "集約はノード順序に依存しない", "エッジ特徴を含める拡張を理解する"],
  "GCN": ["自己ループを加える理由を説明する", "対称正規化の意味を理解する", "近傍を一様に集約する限界を見る"],
  "GAT": ["Attention係数をエッジごとに学習する", "GCNとの重み付けの違いを説明する", "Multi-head GATの目的を理解する"],
  "GIN": ["sum集約とMLPで表現力を高める", "WLテストとの関係を説明する", "epsの役割を理解する"],
  "GVAE": ["潜在変数から隣接行列を再構成する", "内積デコーダの意味を説明する", "再構成項とKL項を分けて理解する"],
  "GraphSAGE": ["近傍サンプリングで大規模グラフに対応する", "自己特徴と近傍集約をconcatする", "mean/max/LSTM aggregatorの違いを理解する"],
  "Precision / Recall / F1": ["TP/FP/FNから式を説明する", "不均衡データでAccuracyだけを見ない", "Precision重視かRecall重視かをタスクで判断する"],
  "ROC-AUC": ["閾値を動かしたTPR/FPRを見る", "ランキング性能として解釈する", "PR-AUCとの使い分けを意識する"]
};

const numpySamples = {
  "教師あり学習": `import numpy as np

class SupervisedLinearModel:
    def fit(self, X, y):
        Xb = np.c_[X, np.ones(len(X))]
        self.w = np.linalg.pinv(Xb) @ y
        return self

    def predict(self, X):
        return np.c_[X, np.ones(len(X))] @ self.w`,
  "教師なし学習": `import numpy as np

class UnsupervisedCentering:
    def fit_transform(self, X):
        self.mean = X.mean(axis=0)
        centered = X - self.mean
        _, _, vt = np.linalg.svd(centered, full_matrices=False)
        return centered @ vt[:2].T`,
  "半教師あり学習": `import numpy as np

class PseudoLabelSelector:
    def select(self, probabilities, threshold=0.95):
        confidence = probabilities.max(axis=1)
        labels = probabilities.argmax(axis=1)
        mask = confidence >= threshold
        return labels[mask], mask`,
  "自己教師あり学習": `import numpy as np

class CosineContrastive:
    def similarity(self, z1, z2):
        z1 = z1 / (np.linalg.norm(z1, axis=1, keepdims=True) + 1e-7)
        z2 = z2 / (np.linalg.norm(z2, axis=1, keepdims=True) + 1e-7)
        return z1 @ z2.T`,
  "強化学習": `import numpy as np

class QLearning:
    def __init__(self, states, actions, alpha=0.1, gamma=0.99):
        self.Q = np.zeros((states, actions))
        self.alpha, self.gamma = alpha, gamma

    def update(self, s, a, reward, next_s):
        target = reward + self.gamma * self.Q[next_s].max()
        self.Q[s, a] += self.alpha * (target - self.Q[s, a])`,
  "線形回帰": `import numpy as np

class LinearRegression:
    def fit(self, X, y):
        Xb = np.c_[X, np.ones(len(X))]
        self.coef = np.linalg.pinv(Xb.T @ Xb) @ Xb.T @ y
        return self

    def predict(self, X):
        return np.c_[X, np.ones(len(X))] @ self.coef`,
  "ロジスティック回帰": `import numpy as np

class LogisticRegression:
    def __init__(self, features, lr=0.1):
        self.w = np.zeros(features); self.b = 0.; self.lr = lr

    def fit_step(self, X, y):
        p = 1 / (1 + np.exp(-(X @ self.w + self.b)))
        self.w -= self.lr * (X.T @ (p - y) / len(X))
        self.b -= self.lr * np.mean(p - y)`,
  "Support Vector Machine": `import numpy as np

class LinearSVM:
    def __init__(self, features, lr=0.01, C=1.0):
        self.w = np.zeros(features); self.b = 0.; self.lr = lr; self.C = C

    def fit_step(self, X, y):
        margin = y * (X @ self.w + self.b)
        active = margin < 1
        grad_w = self.w - self.C * (X[active].T @ y[active]) / len(X)
        self.w -= self.lr * grad_w`,
  "Decision Tree": `import numpy as np

class GiniSplit:
    def impurity(self, y):
        _, counts = np.unique(y, return_counts=True)
        p = counts / counts.sum()
        return 1 - np.sum(p ** 2)

    def weighted(self, left, right):
        n = len(left) + len(right)
        return len(left)/n*self.impurity(left) + len(right)/n*self.impurity(right)`,
  "Random Forest": `import numpy as np

class BootstrapSampler:
    def sample(self, X, y, rng):
        index = rng.integers(0, len(X), size=len(X))
        return X[index], y[index]

    def vote(self, tree_predictions):
        return (np.mean(tree_predictions, axis=0) >= 0.5).astype(int)`,
  "k-Nearest Neighbors": `import numpy as np

class KNNClassifier:
    def fit(self, X, y): self.X, self.y = X, y
    def predict_one(self, x, k=5):
        index = np.argsort(np.linalg.norm(self.X - x, axis=1))[:k]
        values, counts = np.unique(self.y[index], return_counts=True)
        return values[counts.argmax()]`,
  "Naive Bayes": `import numpy as np

class GaussianNaiveBayes:
    def fit(self, X, y):
        self.classes = np.unique(y)
        self.mean = {c: X[y == c].mean(0) for c in self.classes}
        self.var = {c: X[y == c].var(0) + 1e-7 for c in self.classes}
        self.prior = {c: np.mean(y == c) for c in self.classes}`,
  "Gradient Boosting": `import numpy as np

class BoostingState:
    def __init__(self, learning_rate=0.1): self.lr = learning_rate
    def residual(self, y, prediction): return y - prediction
    def update(self, prediction, weak_prediction):
        return prediction + self.lr * weak_prediction`,
  "k-means": `import numpy as np

class KMeans:
    def step(self, X, centers):
        distance = ((X[:, None, :] - centers[None, :, :]) ** 2).sum(2)
        labels = distance.argmin(1)
        new_centers = np.array([X[labels == k].mean(0) for k in range(len(centers))])
        return labels, new_centers`,
  "Principal Component Analysis": `import numpy as np

class PCA:
    def fit_transform(self, X, components=2):
        self.mean = X.mean(0)
        centered = X - self.mean
        _, singular, vt = np.linalg.svd(centered, full_matrices=False)
        self.components = vt[:components]
        self.explained_variance = singular[:components] ** 2 / (len(X) - 1)
        return centered @ self.components.T`,
  "reshapeとtranspose": `import numpy as np

x = np.arange(24).reshape(2, 3, 4)
flat_batch = x.reshape(2, 12)
channels_last = x.transpose(0, 2, 1)`,
  "concatenateとstack": `import numpy as np

x = np.ones((2, 3)); y = np.zeros((2, 3))
rows = np.concatenate([x, y], axis=0)
new_axis = np.stack([x, y], axis=0)`,
  "whereとargsort": `import numpy as np

score = np.array([0.2, 0.9, 0.4, 0.7])
top2 = np.argsort(score)[-2:][::-1]
positive = np.where(score >= 0.5, 1, 0)`,
  "pivot_table": `import pandas as pd

table = df.pivot_table(
    index="class", columns="month", values="score",
    aggfunc="mean", fill_value=0
)`,
  "rollingと時系列集計": `import pandas as pd

df = df.sort_values("date")
df["lag1"] = df["value"].shift(1)
df["ma7"] = df["value"].shift(1).rolling(7, min_periods=1).mean()`,
  "ポアソン分布": `import numpy as np

class PoissonModel:
    def pmf(self, k, lam):
        import math
        return np.exp(-lam) * lam**k / math.factorial(k)
    def sample(self, lam, size): return np.random.poisson(lam, size)`,
  "指数分布": `import numpy as np

class ExponentialModel:
    def pdf(self, x, rate): return rate * np.exp(-rate * x) * (x >= 0)
    def sample(self, rate, size): return np.random.exponential(1 / rate, size)`,
  "一様分布": `import numpy as np

class UniformModel:
    def pdf(self, x, a, b): return np.where((a <= x) & (x <= b), 1 / (b - a), 0)
    def sample(self, a, b, size): return np.random.uniform(a, b, size)`,
  "ベータ分布": `import numpy as np

class BetaPosterior:
    def update(self, alpha, beta, successes, failures):
        return alpha + successes, beta + failures
    def sample(self, alpha, beta, size): return np.random.beta(alpha, beta, size)`,
  "ガンマ分布": `import numpy as np

class GammaModel:
    def mean_variance(self, shape, scale):
        return shape * scale, shape * scale**2
    def sample(self, shape, scale, size): return np.random.gamma(shape, scale, size)`,
  "t分布とカイ二乗分布": `import numpy as np

class TestDistributions:
    def sample(self, df, size=1000):
        t_values = np.random.standard_t(df, size)
        chi2_values = np.random.chisquare(df, size)
        return t_values, chi2_values`,
  "ヒストグラムと分布形状": `import numpy as np

class HistogramAnalyzer:
    def analyze(self, x, bins=10):
        counts, edges = np.histogram(x, bins=bins)
        mean = x.mean()
        skew_direction = "right" if np.median(x) < mean else "left_or_symmetric"
        return counts, edges, skew_direction`,
  "箱ひげ図と四分位範囲": `import numpy as np

class BoxplotStatistics:
    def compute(self, x):
        q1, median, q3 = np.percentile(x, [25, 50, 75])
        iqr = q3 - q1
        lower, upper = q1 - 1.5 * iqr, q3 + 1.5 * iqr
        outliers = x[(x < lower) | (x > upper)]
        return q1, median, q3, outliers`,
  "標準化と正規化": `import numpy as np

class StandardScaler:
    def fit(self, X):
        self.mean = X.mean(axis=0, keepdims=True)
        self.std = X.std(axis=0, keepdims=True) + 1e-7
        return self

    def transform(self, X):
        return (X - self.mean) / self.std`,
  "カテゴリ変数エンコーディング": `import pandas as pd

class OneHotFrameEncoder:
    def fit_transform(self, df, column):
        self.categories = sorted(df[column].dropna().unique())
        dtype = pd.CategoricalDtype(self.categories)
        values = df[column].astype(dtype)
        return pd.get_dummies(values, prefix=column, dtype=float)`,
  "データ分割とリーク防止": `import numpy as np

class TrainOnlyPreprocessor:
    def fit(self, X_train):
        self.mean = X_train.mean(axis=0)
        self.std = X_train.std(axis=0) + 1e-7
        return self

    def transform(self, X):
        return (X - self.mean) / self.std`,
  "転移学習とFine-tuning": `import numpy as np

class FrozenBackboneModel:
    def __init__(self, pretrained_W, out_dim):
        self.backbone_W = pretrained_W.copy()
        self.head_W = np.random.randn(pretrained_W.shape[1], out_dim) * 0.01

    def forward(self, X):
        frozen_features = np.maximum(0, X @ self.backbone_W)
        return frozen_features @ self.head_W`,
  "Mixed Precision Training": `import numpy as np

class LossScaler:
    def __init__(self, scale=1024.0):
        self.scale = scale

    def scale_loss(self, loss):
        return loss * self.scale

    def unscale_gradient(self, grad):
        return grad / self.scale`,
  "Knowledge Distillation": `import numpy as np

class DistillationLoss:
    def softmax(self, x):
        e = np.exp(x - x.max(axis=1, keepdims=True))
        return e / e.sum(axis=1, keepdims=True)

    def forward(self, student, teacher, temperature=4.0):
        ps = self.softmax(student / temperature)
        pt = self.softmax(teacher / temperature)
        return np.mean(np.sum(pt * (np.log(pt + 1e-7) - np.log(ps + 1e-7)), axis=1)) * temperature**2`,
  "Data Augmentation": `import numpy as np

class ImageAugmenter:
    def horizontal_flip(self, image, probability=0.5):
        if np.random.rand() < probability:
            return np.flip(image, axis=1).copy()
        return image.copy()`,
  "スライス": `import numpy as np

class SliceExamples:
    def run(self):
        x = np.arange(12).reshape(3, 4)
        rows = x[1:]
        every_other_column = x[:, ::2]
        reversed_rows = x[::-1]
        copied = x[:, 1:3].copy()
        return rows, every_other_column, reversed_rows, copied`,
  "ブロードキャスト": `import numpy as np

class BroadcastingExample:
    def center_columns(self, X):
        mean = X.mean(axis=0, keepdims=True)
        return X - mean

    def add_bias(self, X, bias):
        assert X.shape[-1] == bias.shape[0]
        return X + bias`,
  "np.dotと行列積": `import numpy as np

class MatrixProduct:
    def linear(self, X, W, b):
        assert X.shape[1] == W.shape[0]
        return X @ W + b

    def vector_dot(self, a, b):
        return np.dot(a, b)`,
  "axisとkeepdims": `import numpy as np

class AxisExamples:
    def statistics(self, X):
        column_mean = X.mean(axis=0, keepdims=True)
        row_sum = X.sum(axis=1, keepdims=True)
        global_max = X.max()
        return column_mean, row_sum, global_max`,
  "Boolean Indexing": `import numpy as np

class BooleanIndexing:
    def filter_valid(self, X):
        mask = np.isfinite(X).all(axis=1)
        return X[mask]

    def clip_negative(self, X):
        result = X.copy()
        result[result < 0] = 0
        return result`,
  "DataFrameとSeries": `import pandas as pd

class FrameExample:
    def build(self):
        df = pd.DataFrame({"feature": [1.2, 2.4], "label": [0, 1]})
        feature_series = df["feature"]
        feature_matrix = df[["feature"]].to_numpy(dtype="float32")
        return df, feature_series, feature_matrix`,
  "groupbyと集約": `import pandas as pd

class GroupSummary:
    def summarize(self, df):
        return (
            df.groupby("class", as_index=False)
              .agg(score_mean=("score", "mean"), score_std=("score", "std"), count=("score", "size"))
        )`,
  "mergeとjoin": `import pandas as pd

class TableMerger:
    def merge_features(self, users, scores):
        return users.merge(
            scores,
            on="user_id",
            how="left",
            validate="one_to_many"
        )`,
  "欠損値処理": `import pandas as pd

class MedianImputer:
    def fit(self, train, column):
        self.column = column
        self.value = train[column].median()
        return self

    def transform(self, df):
        out = df.copy()
        out[self.column + "_missing"] = out[self.column].isna().astype(int)
        out[self.column] = out[self.column].fillna(self.value)
        return out`,
  "期待値と分散": `import numpy as np

class DiscreteMoments:
    def compute(self, values, probabilities):
        probabilities = probabilities / probabilities.sum()
        mean = np.sum(values * probabilities)
        variance = np.sum((values - mean) ** 2 * probabilities)
        return mean, variance`,
  "共分散と相関係数": `import numpy as np

class DependenceMeasures:
    def compute(self, x, y):
        covariance = np.cov(x, y, ddof=1)[0, 1]
        correlation = np.corrcoef(x, y)[0, 1]
        return covariance, correlation`,
  "ベルヌーイ分布と二項分布": `import numpy as np

class BernoulliBinomial:
    def sample(self, p=0.7, trials=10, size=1000):
        bernoulli = np.random.binomial(1, p, size=size)
        binomial = np.random.binomial(trials, p, size=size)
        return bernoulli, binomial`,
  "正規分布": `import numpy as np

class NormalDistribution:
    def sample_and_standardize(self, mean=5.0, std=2.0, size=1000):
        x = np.random.normal(mean, std, size)
        z = (x - mean) / std
        return x, z`,
  "ベイズの定理": `class BayesRule:
    def posterior(self, prior, sensitivity, false_positive_rate):
        evidence = sensitivity * prior + false_positive_rate * (1 - prior)
        return sensitivity * prior / evidence`,
  "中心極限定理": `import numpy as np

class CentralLimitSimulation:
    def sample_means(self, repetitions=5000, sample_size=50):
        return np.array([
            np.mean(np.random.exponential(scale=1.0, size=sample_size))
            for _ in range(repetitions)
        ])`,
  "Adam": `import numpy as np

class AdamOptimizer:
    def __init__(self, params, lr=1e-3, beta1=0.9, beta2=0.999, eps=1e-8):
        self.params = params
        self.lr, self.beta1, self.beta2, self.eps = lr, beta1, beta2, eps
        self.m = [np.zeros_like(p) for p in params]
        self.v = [np.zeros_like(p) for p in params]
        self.t = 0

    def step(self, grads):
        self.t += 1
        for i, grad in enumerate(grads):
            self.m[i] = self.beta1 * self.m[i] + (1 - self.beta1) * grad
            self.v[i] = self.beta2 * self.v[i] + (1 - self.beta2) * grad**2
            m_hat = self.m[i] / (1 - self.beta1**self.t)
            v_hat = self.v[i] / (1 - self.beta2**self.t)
            self.params[i] -= self.lr * m_hat / (np.sqrt(v_hat) + self.eps)`,
  "Batch Normalization": `import numpy as np

class BatchNorm1D:
    def __init__(self, features, momentum=0.9, eps=1e-5):
        self.gamma = np.ones(features)
        self.beta = np.zeros(features)
        self.running_mean = np.zeros(features)
        self.running_var = np.ones(features)
        self.momentum = momentum
        self.eps = eps

    def forward(self, x, training=True):
        if training:
            mean, var = x.mean(axis=0), x.var(axis=0)
            self.running_mean = self.momentum * self.running_mean + (1 - self.momentum) * mean
            self.running_var = self.momentum * self.running_var + (1 - self.momentum) * var
        else:
            mean, var = self.running_mean, self.running_var
        return self.gamma * (x - mean) / np.sqrt(var + self.eps) + self.beta`,
  "畳み込み": `import numpy as np

class Conv2D:
    def __init__(self, kernel, stride=1, pad=0):
        self.kernel = kernel
        self.stride = stride
        self.pad = pad

    def forward(self, x):
        x = np.pad(x, ((self.pad, self.pad), (self.pad, self.pad)))
        kh, kw = self.kernel.shape
        oh = (x.shape[0] - kh) // self.stride + 1
        ow = (x.shape[1] - kw) // self.stride + 1
        out = np.zeros((oh, ow))
        for i in range(oh):
            for j in range(ow):
                patch = x[i*self.stride:i*self.stride+kh, j*self.stride:j*self.stride+kw]
                out[i, j] = np.sum(patch * self.kernel)
        return out`,
  "Graph Neural Network": `import numpy as np

class SimpleGNNLayer:
    def __init__(self, in_dim, out_dim):
        self.W = np.random.randn(in_dim, out_dim) * np.sqrt(2 / in_dim)

    def forward(self, X, A):
        A_hat = A + np.eye(A.shape[0])
        D = np.diag(1 / np.sqrt(A_hat.sum(axis=1) + 1e-7))
        return np.maximum(0, D @ A_hat @ D @ X @ self.W)`,
  "Message Passing": `import numpy as np

class MessagePassing:
    def forward(self, X, neighbors):
        out = []
        for v, ns in enumerate(neighbors):
            message = np.mean([X[u] for u in ns], axis=0)
            out.append(np.maximum(0, X[v] + message))
        return np.stack(out)`,
  "GCN": `import numpy as np

class GCNLayer:
    def __init__(self, in_dim, out_dim):
        self.W = np.random.randn(in_dim, out_dim) * np.sqrt(2 / in_dim)

    def forward(self, X, A):
        A_hat = A + np.eye(A.shape[0])
        D_inv = np.diag(1 / np.sqrt(A_hat.sum(axis=1) + 1e-7))
        return np.maximum(0, D_inv @ A_hat @ D_inv @ X @ self.W)`,
  "GAT": `import numpy as np

class GATLayer:
    def __init__(self, in_dim, out_dim):
        self.W = np.random.randn(in_dim, out_dim) * np.sqrt(2 / in_dim)
        self.a = np.random.randn(2 * out_dim) * 0.01

    def forward(self, X, neighbors):
        Z = X @ self.W
        out = np.zeros_like(Z)
        for i, ns in enumerate(neighbors):
            scores = np.array([np.maximum(0.2 * (self.a @ np.r_[Z[i], Z[j]]), self.a @ np.r_[Z[i], Z[j]]) for j in ns])
            alpha = np.exp(scores - scores.max()); alpha /= alpha.sum()
            out[i] = sum(w * Z[j] for w, j in zip(alpha, ns))
        return out`,
  "GIN": `import numpy as np

class GINLayer:
    def __init__(self, dim, eps=0.0):
        self.eps = eps
        self.W = np.random.randn(dim, dim) * np.sqrt(2 / dim)

    def forward(self, X, neighbors):
        out = []
        for v, ns in enumerate(neighbors):
            agg = np.sum([X[u] for u in ns], axis=0)
            out.append(np.maximum(0, ((1 + self.eps) * X[v] + agg) @ self.W))
        return np.stack(out)`,
  "GVAE": `import numpy as np

class GVAE:
    def encode(self, X, A, W_mu, W_logvar):
        H = (A + np.eye(A.shape[0])) @ X
        return H @ W_mu, H @ W_logvar

    def reparameterize(self, mu, log_var):
        return mu + np.exp(0.5 * log_var) * np.random.randn(*mu.shape)

    def decode(self, Z):
        return 1 / (1 + np.exp(-(Z @ Z.T)))`,
  "Softmax": `import numpy as np

class Softmax:
    def forward(self, x):
        z = x - x.max(axis=-1, keepdims=True)
        exp_z = np.exp(z)
        return exp_z / exp_z.sum(axis=-1, keepdims=True)`,
  "交差エントロピー": `import numpy as np

class CrossEntropyLoss:
    def forward(self, logits, target):
        z = logits - logits.max(axis=1, keepdims=True)
        probs = np.exp(z) / np.exp(z).sum(axis=1, keepdims=True)
        return -np.mean(np.log(probs[np.arange(len(target)), target] + 1e-7))`,
  "誤差逆伝播": `import numpy as np

class LinearBackward:
    def forward(self, x, W):
        self.x, self.W = x, W
        return x @ W

    def backward(self, dout):
        dW = self.x.T @ dout
        dx = dout @ self.W.T
        return dx, dW`,
  "Gradient Clipping": `import numpy as np

class GradientClipper:
    def __init__(self, max_norm):
        self.max_norm = max_norm

    def clip(self, grad):
        norm = np.linalg.norm(grad)
        return grad * self.max_norm / max(self.max_norm, norm)`,
  "Learning Rate Scheduler": `import numpy as np

class CosineScheduler:
    def __init__(self, base_lr, total_steps):
        self.base_lr = base_lr
        self.total_steps = total_steps

    def lr(self, step):
        return self.base_lr * 0.5 * (1 + np.cos(np.pi * step / self.total_steps))`,
  "GraphSAGE": `import numpy as np

class GraphSAGELayer:
    def __init__(self, in_dim, out_dim):
        self.W = np.random.randn(2 * in_dim, out_dim) * np.sqrt(2 / (2 * in_dim))

    def forward(self, X, sampled_neighbors):
        out = []
        for v, ns in enumerate(sampled_neighbors):
            neigh = np.mean([X[u] for u in ns], axis=0)
            out.append(np.maximum(0, np.r_[X[v], neigh] @ self.W))
        return np.stack(out)`,
  "偏微分と勾配": `import numpy as np

class LinearRegressionGrad:
    def __init__(self, features):
        self.w = np.zeros((features, 1))
        self.b = 0.0

    def predict(self, X):
        return X @ self.w + self.b

    def gradients(self, X, y):
        pred = self.predict(X)
        error = pred - y
        grad_w = X.T @ error / len(X)
        grad_b = error.mean()
        return grad_w, grad_b`,
  "連鎖律": `import numpy as np

class ChainRuleExample:
    def forward(self, x):
        self.x = x
        self.y = x ** 2
        self.z = 3 * self.y
        return self.z

    def backward(self, dz):
        dz_dy = 3
        dy_dx = 2 * self.x
        return dz * dz_dy * dy_dx`,
  "エントロピー": `import numpy as np

class Entropy:
    def __call__(self, p):
        p = np.asarray(p, dtype=float)
        p = p / p.sum()
        return -np.sum(p * np.log(p + 1e-7))`,
  "KLダイバージェンス": `import numpy as np

class KLDivergence:
    def __call__(self, p, q):
        p = np.asarray(p, dtype=float) / np.sum(p)
        q = np.asarray(q, dtype=float) / np.sum(q)
        return np.sum(p * (np.log(p + 1e-7) - np.log(q + 1e-7)))`,
  "最尤推定": `import numpy as np

class BernoulliMLE:
    def fit(self, x):
        self.p = np.mean(x)
        return self.p

    def negative_log_likelihood(self, x):
        return -np.sum(x * np.log(self.p + 1e-7) + (1 - x) * np.log(1 - self.p + 1e-7))`,
  "Batch Gradient Descent": `import numpy as np

class BatchGradientDescent:
    def __init__(self, features, lr=0.01):
        self.w = np.zeros((features, 1))
        self.lr = lr

    def step(self, X, y):
        pred = X @ self.w
        grad = X.T @ (pred - y) / len(X)
        self.w -= self.lr * grad
        return np.mean((pred - y) ** 2)`,
  "Stochastic Gradient Descent": `import numpy as np

class MiniBatchSGD:
    def __init__(self, features, lr=0.01):
        self.w = np.zeros((features, 1))
        self.lr = lr

    def step(self, X_batch, y_batch):
        pred = X_batch @ self.w
        grad = X_batch.T @ (pred - y_batch) / len(X_batch)
        self.w -= self.lr * grad`,
  "Momentum": `import numpy as np

class MomentumOptimizer:
    def __init__(self, param, lr=0.01, momentum=0.9):
        self.param = param
        self.velocity = np.zeros_like(param)
        self.lr = lr
        self.momentum = momentum

    def step(self, grad):
        self.velocity = self.momentum * self.velocity - self.lr * grad
        self.param += self.velocity`,
  "Nesterov Momentum": `import numpy as np

class NesterovMomentum:
    def __init__(self, param, lr=0.01, momentum=0.9):
        self.param = param
        self.velocity = np.zeros_like(param)
        self.lr = lr
        self.momentum = momentum

    def lookahead(self):
        return self.param + self.momentum * self.velocity

    def step(self, grad_at_lookahead):
        self.velocity = self.momentum * self.velocity - self.lr * grad_at_lookahead
        self.param += self.velocity`,
  "AdaGrad": `import numpy as np

class AdaGrad:
    def __init__(self, param, lr=0.1, eps=1e-7):
        self.param = param
        self.h = np.zeros_like(param)
        self.lr = lr
        self.eps = eps

    def step(self, grad):
        self.h += grad ** 2
        self.param -= self.lr * grad / (np.sqrt(self.h) + self.eps)`,
  "RMSProp": `import numpy as np

class RMSProp:
    def __init__(self, param, lr=0.001, rho=0.9, eps=1e-8):
        self.param = param
        self.h = np.zeros_like(param)
        self.lr = lr
        self.rho = rho
        self.eps = eps

    def step(self, grad):
        self.h = self.rho * self.h + (1 - self.rho) * grad ** 2
        self.param -= self.lr * grad / (np.sqrt(self.h) + self.eps)`,
  "L1正則化": `import numpy as np

class L1Penalty:
    def __init__(self, lambda_=0.01):
        self.lambda_ = lambda_

    def loss(self, data_loss, w):
        return data_loss + self.lambda_ * np.sum(np.abs(w))

    def grad(self, w):
        return self.lambda_ * np.sign(w)`,
  "L2正則化": `import numpy as np

class L2Penalty:
    def __init__(self, lambda_=0.01):
        self.lambda_ = lambda_

    def loss(self, data_loss, w):
        return data_loss + self.lambda_ * np.sum(w ** 2)

    def grad(self, w):
        return 2 * self.lambda_ * w`,
  "Weight Decay": `import numpy as np

class DecoupledWeightDecay:
    def __init__(self, param, lr=0.001, weight_decay=0.01):
        self.param = param
        self.lr = lr
        self.weight_decay = weight_decay

    def step(self, grad):
        self.param -= self.lr * grad
        self.param -= self.lr * self.weight_decay * self.param`,
  "Layer Normalization": `import numpy as np

class LayerNorm:
    def __init__(self, features, eps=1e-5):
        self.gamma = np.ones(features)
        self.beta = np.zeros(features)
        self.eps = eps

    def forward(self, x):
        mean = x.mean(axis=-1, keepdims=True)
        var = x.var(axis=-1, keepdims=True)
        return self.gamma * (x - mean) / np.sqrt(var + self.eps) + self.beta`,
  "Instance Normalization": `import numpy as np

class InstanceNorm2D:
    def __init__(self, channels, eps=1e-5):
        self.gamma = np.ones((1, channels, 1, 1))
        self.beta = np.zeros((1, channels, 1, 1))
        self.eps = eps

    def forward(self, x):
        mean = x.mean(axis=(2, 3), keepdims=True)
        var = x.var(axis=(2, 3), keepdims=True)
        return self.gamma * (x - mean) / np.sqrt(var + self.eps) + self.beta`,
  "Group Normalization": `import numpy as np

class GroupNorm:
    def __init__(self, groups, channels, eps=1e-5):
        self.groups = groups
        self.eps = eps
        self.gamma = np.ones((1, channels, 1, 1))
        self.beta = np.zeros((1, channels, 1, 1))

    def forward(self, x):
        n, c, h, w = x.shape
        xg = x.reshape(n, self.groups, c // self.groups, h, w)
        mean = xg.mean(axis=(2, 3, 4), keepdims=True)
        var = xg.var(axis=(2, 3, 4), keepdims=True)
        return (self.gamma * ((xg - mean) / np.sqrt(var + self.eps)).reshape(n, c, h, w) + self.beta)`,
  "Dropout": `import numpy as np

class Dropout:
    def __init__(self, p=0.5):
        self.p = p

    def forward(self, x, training=True):
        if not training:
            return x
        mask = (np.random.rand(*x.shape) > self.p) / (1 - self.p)
        return x * mask`,
  "Spatial Dropout": `import numpy as np

class SpatialDropout2D:
    def __init__(self, p=0.2):
        self.p = p

    def forward(self, x, training=True):
        if not training:
            return x
        n, c, _, _ = x.shape
        mask = (np.random.rand(n, c, 1, 1) > self.p) / (1 - self.p)
        return x * mask`,
  "Depthwise Separable Convolution": `import numpy as np

class DepthwiseSeparableInfo:
    def params(self, k, in_c, out_c):
        depthwise = k * k * in_c
        pointwise = in_c * out_c
        normal = k * k * in_c * out_c
        return {"normal": normal, "separable": depthwise + pointwise}`,
  "Residual Connection": `import numpy as np

class ResidualBlock:
    def __init__(self, features):
        self.W = np.random.randn(features, features) * np.sqrt(2 / features)

    def forward(self, x):
        residual = x
        out = np.maximum(0, x @ self.W)
        return out + residual`,
  "RNN": `import numpy as np

class SimpleRNNCell:
    def __init__(self, input_dim, hidden_dim):
        self.Wx = np.random.randn(input_dim, hidden_dim) * 0.1
        self.Wh = np.random.randn(hidden_dim, hidden_dim) * 0.1
        self.b = np.zeros(hidden_dim)

    def forward(self, x_t, h_prev):
        return np.tanh(x_t @ self.Wx + h_prev @ self.Wh + self.b)`,
  "LSTM": `import numpy as np

class LSTMStateUpdate:
    def forward(self, f_t, i_t, g_t, o_t, c_prev):
        c_t = f_t * c_prev + i_t * g_t
        h_t = o_t * np.tanh(c_t)
        return h_t, c_t`,
  "GRU": `import numpy as np

class GRUStateUpdate:
    def forward(self, z_t, r_t, h_prev, candidate):
        h_t = (1 - z_t) * h_prev + z_t * candidate
        return h_t`,
  "Multi-Head Attention": `import numpy as np

class MultiHeadShape:
    def split_heads(self, x, heads):
        batch, length, d_model = x.shape
        d_head = d_model // heads
        return x.reshape(batch, length, heads, d_head).transpose(0, 2, 1, 3)`,
  "Positional Encoding": `import numpy as np

class SinusoidalPositionEncoding:
    def build(self, length, d_model):
        pos = np.arange(length)[:, None]
        i = np.arange(d_model)[None, :]
        angle = pos / np.power(10000, (2 * (i // 2)) / d_model)
        pe = np.zeros((length, d_model))
        pe[:, 0::2] = np.sin(angle[:, 0::2])
        pe[:, 1::2] = np.cos(angle[:, 1::2])
        return pe`,
  "Pre-LN Transformer": `import numpy as np

class PreLNBlock:
    def __init__(self, norm, attention, mlp):
        self.norm = norm
        self.attention = attention
        self.mlp = mlp

    def forward(self, x):
        x = x + self.attention(self.norm(x))
        x = x + self.mlp(self.norm(x))
        return x`,
  "Scaled Dot-Product Attention": `import numpy as np

class ScaledDotProductAttention:
    def softmax(self, x):
        x = x - x.max(axis=-1, keepdims=True)
        exp_x = np.exp(x)
        return exp_x / exp_x.sum(axis=-1, keepdims=True)

    def forward(self, Q, K, V, mask=None):
        d_k = Q.shape[-1]
        scores = Q @ K.transpose(0, 2, 1) / np.sqrt(d_k)
        if mask is not None:
            scores = np.where(mask == 0, -1e9, scores)
        weights = self.softmax(scores)
        return weights @ V, weights`,
  "AutoEncoder": `import numpy as np

class LinearAutoEncoder:
    def __init__(self, input_dim, latent_dim):
        self.We = np.random.randn(input_dim, latent_dim) * 0.1
        self.Wd = np.random.randn(latent_dim, input_dim) * 0.1

    def forward(self, x):
        z = x @ self.We
        x_hat = z @ self.Wd
        loss = np.mean((x - x_hat) ** 2)
        return x_hat, z, loss`,
  "Variational AutoEncoder": `import numpy as np

class VariationalAutoEncoderMath:
    def reparameterize(self, mu, log_var):
        eps = np.random.randn(*mu.shape)
        return mu + np.exp(0.5 * log_var) * eps

    def kl_loss(self, mu, log_var):
        return -0.5 * np.sum(1 + log_var - mu**2 - np.exp(log_var))

    def total_loss(self, x, x_hat, mu, log_var):
        recon = np.mean((x - x_hat) ** 2)
        return recon + self.kl_loss(mu, log_var)`,
  "GAN": `import numpy as np

class GanLoss:
    def discriminator_loss(self, d_real, d_fake):
        real_loss = -np.mean(np.log(d_real + 1e-7))
        fake_loss = -np.mean(np.log(1 - d_fake + 1e-7))
        return real_loss + fake_loss

    def generator_loss(self, d_fake):
        return -np.mean(np.log(d_fake + 1e-7))`,
  "Precision / Recall / F1": `class ClassificationMetrics:
    def compute(self, tp, fp, fn):
        precision = tp / (tp + fp + 1e-7)
        recall = tp / (tp + fn + 1e-7)
        f1 = 2 * precision * recall / (precision + recall + 1e-7)
        return precision, recall, f1`,
  "ROC-AUC": `import numpy as np

class RocPoints:
    def point(self, tp, fp, tn, fn):
        tpr = tp / (tp + fn + 1e-7)
        fpr = fp / (fp + tn + 1e-7)
        return fpr, tpr`
};

const torchSamples = {
  "教師あり学習": `import torch
import torch.nn as nn

model = nn.Linear(8, 3)
optimizer = torch.optim.Adam(model.parameters())
loss = nn.CrossEntropyLoss()(model(X_train), y_train)
loss.backward(); optimizer.step()`,
  "教師なし学習": `import torch

X_centered = X - X.mean(dim=0, keepdim=True)
U, S, Vh = torch.linalg.svd(X_centered, full_matrices=False)
embedding = X_centered @ Vh[:2].T`,
  "半教師あり学習": `import torch

with torch.no_grad():
    probability = model(X_unlabeled).softmax(-1)
confidence, pseudo_label = probability.max(-1)
mask = confidence >= 0.95`,
  "自己教師あり学習": `import torch.nn.functional as F

z1 = F.normalize(encoder(view1), dim=-1)
z2 = F.normalize(encoder(view2), dim=-1)
similarity = z1 @ z2.T / temperature`,
  "強化学習": `import torch

target = reward + gamma * next_q.max().detach()
loss = torch.nn.functional.mse_loss(q_values[action], target)
loss.backward(); optimizer.step()`,
  "線形回帰": `import torch
import torch.nn as nn

model = nn.Linear(features, 1)
loss = nn.MSELoss()(model(X), y)
loss.backward()`,
  "ロジスティック回帰": `import torch.nn as nn

model = nn.Linear(features, 1)
criterion = nn.BCEWithLogitsLoss()
loss = criterion(model(X).squeeze(1), y.float())`,
  "Support Vector Machine": `import torch

score = X @ w + b
hinge = torch.relu(1 - y * score).mean()
loss = 0.5 * w.pow(2).sum() + C * hinge`,
  "Decision Tree": `import torch

counts = torch.bincount(labels, minlength=classes).float()
probability = counts / counts.sum()
gini = 1 - probability.pow(2).sum()`,
  "Random Forest": `import torch

tree_predictions = torch.stack(predictions)
forest_probability = tree_predictions.float().mean(dim=0)
forest_class = (forest_probability >= 0.5).long()`,
  "k-Nearest Neighbors": `import torch

distance = torch.cdist(query.unsqueeze(0), X_train).squeeze(0)
index = distance.topk(k, largest=False).indices
prediction = torch.mode(y_train[index]).values`,
  "Naive Bayes": `import torch

log_likelihood = -0.5 * (torch.log(2 * torch.pi * var) + (x - mean).pow(2) / var)
log_posterior = log_prior + log_likelihood.sum(dim=-1)`,
  "Gradient Boosting": `import torch

residual = target - prediction
prediction = prediction + learning_rate * weak_prediction`,
  "k-means": `import torch

distance = torch.cdist(X, centers)
labels = distance.argmin(dim=1)
centers = torch.stack([X[labels == k].mean(0) for k in range(K)])`,
  "Principal Component Analysis": `import torch

centered = X - X.mean(0, keepdim=True)
U, S, Vh = torch.linalg.svd(centered, full_matrices=False)
embedding = centered @ Vh[:components].T`,
  "reshapeとtranspose": `import torch

x = torch.arange(24).reshape(2, 3, 4)
flat_batch = x.reshape(2, 12)
permuted = x.permute(0, 2, 1)`,
  "concatenateとstack": `import torch

rows = torch.cat([x, y], dim=0)
new_axis = torch.stack([x, y], dim=0)`,
  "whereとargsort": `import torch

clean = torch.where(x > 0, x, torch.zeros_like(x))
topk = torch.argsort(score, descending=True)[:k]`,
  "pivot_table": `import pandas as pd
import torch

table = df.pivot_table(index="class", columns="month", values="score", aggfunc="mean")
tensor = torch.tensor(table.fillna(0).to_numpy(), dtype=torch.float32)`,
  "rollingと時系列集計": `import pandas as pd
import torch

df["ma7"] = df["value"].shift(1).rolling(7).mean()
features = torch.tensor(df[["ma7"]].fillna(0).to_numpy(), dtype=torch.float32)`,
  "ポアソン分布": `import torch

distribution = torch.distributions.Poisson(rate=3.0)
samples = distribution.sample((1000,))
log_prob = distribution.log_prob(samples)`,
  "指数分布": `import torch

distribution = torch.distributions.Exponential(rate=2.0)
wait = distribution.sample((1000,))`,
  "一様分布": `import torch

distribution = torch.distributions.Uniform(low=0.0, high=1.0)
samples = distribution.sample((1000,))`,
  "ベータ分布": `import torch

prior = torch.distributions.Beta(2.0, 2.0)
probability_samples = prior.sample((1000,))`,
  "ガンマ分布": `import torch

distribution = torch.distributions.Gamma(concentration=2.0, rate=1.0)
samples = distribution.sample((1000,))`,
  "t分布とカイ二乗分布": `import torch

t_dist = torch.distributions.StudentT(df=10.0)
t_samples = t_dist.sample((1000,))
chi2 = torch.distributions.Chi2(df=10.0).sample((1000,))`,
  "ヒストグラムと分布形状": `import torch

x = torch.randn(1000)
counts = torch.histc(x, bins=10, min=-3, max=3)`,
  "箱ひげ図と四分位範囲": `import torch

x = torch.randn(1000)
q1, median, q3 = torch.quantile(x, torch.tensor([0.25, 0.5, 0.75]))
iqr = q3 - q1
outliers = x[(x < q1 - 1.5 * iqr) | (x > q3 + 1.5 * iqr)]`,
  "標準化と正規化": `import torch

X_train = torch.randn(100, 8)
mean = X_train.mean(dim=0, keepdim=True)
std = X_train.std(dim=0, keepdim=True)
X_scaled = (X_train - mean) / (std + 1e-7)`,
  "カテゴリ変数エンコーディング": `import pandas as pd
import torch

encoded = pd.get_dummies(df, columns=["city"], dtype=float)
X = torch.tensor(encoded.to_numpy(), dtype=torch.float32)`,
  "データ分割とリーク防止": `import torch

mean = X_train.mean(dim=0, keepdim=True)
std = X_train.std(dim=0, keepdim=True)
X_train = (X_train - mean) / (std + 1e-7)
X_valid = (X_valid - mean) / (std + 1e-7)`,
  "転移学習とFine-tuning": `import torch.nn as nn

class TransferModel(nn.Module):
    def __init__(self, backbone, feature_dim, classes):
        super().__init__()
        self.backbone = backbone
        for parameter in self.backbone.parameters():
            parameter.requires_grad = False
        self.head = nn.Linear(feature_dim, classes)

    def forward(self, x):
        with torch.no_grad():
            features = self.backbone(x)
        return self.head(features)`,
  "Mixed Precision Training": `import torch

scaler = torch.amp.GradScaler("cuda")
optimizer.zero_grad()
with torch.autocast("cuda", dtype=torch.float16):
    output = model(x)
    loss = criterion(output, target)
scaler.scale(loss).backward()
scaler.step(optimizer)
scaler.update()`,
  "Knowledge Distillation": `import torch
import torch.nn.functional as F

temperature = 4.0
teacher_prob = F.softmax(teacher_logits / temperature, dim=-1)
student_log_prob = F.log_softmax(student_logits / temperature, dim=-1)
soft_loss = F.kl_div(student_log_prob, teacher_prob, reduction="batchmean") * temperature**2`,
  "Data Augmentation": `import torch
from torchvision.transforms import v2

augment = v2.Compose([
    v2.RandomHorizontalFlip(p=0.5),
    v2.RandomResizedCrop((224, 224), scale=(0.8, 1.0)),
    v2.ColorJitter(brightness=0.2, contrast=0.2)
])
augmented = augment(image)`,
  "スライス": `import torch

x = torch.arange(12).reshape(3, 4)
rows = x[1:]
every_other_column = x[:, ::2]
reversed_rows = torch.flip(x, dims=[0])`,
  "ブロードキャスト": `import torch

X = torch.randn(8, 3)
bias = torch.tensor([1.0, 2.0, 3.0])
Y = X + bias`,
  "np.dotと行列積": `import torch

X = torch.randn(16, 8)
W = torch.randn(8, 4)
b = torch.zeros(4)
Y = torch.matmul(X, W) + b`,
  "axisとkeepdims": `import torch

X = torch.randn(16, 8)
column_mean = X.mean(dim=0, keepdim=True)
row_sum = X.sum(dim=1, keepdim=True)
X_centered = X - column_mean`,
  "Boolean Indexing": `import torch

x = torch.randn(10)
positive = x[x > 0]
clipped = x.clone()
clipped[clipped < 0] = 0`,
  "DataFrameとSeries": `import pandas as pd
import torch

df = pd.DataFrame({"x": [1.0, 2.0], "label": [0, 1]})
features = torch.tensor(df[["x"]].to_numpy(), dtype=torch.float32)
labels = torch.tensor(df["label"].to_numpy(), dtype=torch.long)`,
  "groupbyと集約": `import pandas as pd
import torch

summary = df.groupby("class", as_index=False)["score"].mean()
group_means = torch.tensor(summary["score"].to_numpy(), dtype=torch.float32)`,
  "mergeとjoin": `import pandas as pd
import torch

merged = users.merge(scores, on="user_id", how="left", validate="one_to_many")
features = torch.tensor(merged[feature_columns].to_numpy(), dtype=torch.float32)`,
  "欠損値処理": `import pandas as pd
import torch

median = train["age"].median()
train["age"] = train["age"].fillna(median)
X = torch.tensor(train[["age"]].to_numpy(), dtype=torch.float32)`,
  "期待値と分散": `import torch

values = torch.tensor([0.0, 1.0, 2.0])
prob = torch.tensor([0.2, 0.5, 0.3])
mean = (values * prob).sum()
variance = ((values - mean) ** 2 * prob).sum()`,
  "共分散と相関係数": `import torch

X = torch.randn(100, 2)
covariance_matrix = torch.cov(X.T)
correlation_matrix = torch.corrcoef(X.T)`,
  "ベルヌーイ分布と二項分布": `import torch

bernoulli = torch.distributions.Bernoulli(probs=0.7)
binomial = torch.distributions.Binomial(total_count=10, probs=0.7)
x = bernoulli.sample((1000,))
k = binomial.sample((1000,))`,
  "正規分布": `import torch

normal = torch.distributions.Normal(loc=0.0, scale=1.0)
x = normal.sample((1000,))
log_prob = normal.log_prob(x)`,
  "ベイズの定理": `import torch

prior = torch.tensor(0.01)
sensitivity = torch.tensor(0.95)
false_positive = torch.tensor(0.05)
evidence = sensitivity * prior + false_positive * (1 - prior)
posterior = sensitivity * prior / evidence`,
  "中心極限定理": `import torch

samples = torch.distributions.Exponential(1.0).sample((5000, 50))
sample_means = samples.mean(dim=1)`,
  "Adam": `import torch
import torch.nn as nn

model = nn.Linear(8, 1)
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)
loss = nn.MSELoss()(model(torch.randn(16, 8)), torch.randn(16, 1))
loss.backward()
optimizer.step()
optimizer.zero_grad()`,
  "Batch Normalization": `import torch.nn as nn

class BatchNormBlock(nn.Module):
    def __init__(self, features):
        super().__init__()
        self.norm = nn.BatchNorm1d(features)
        self.proj = nn.Linear(features, features)

    def forward(self, x):
        return self.proj(self.norm(x))`,
  "畳み込み": `import torch.nn as nn

class ConvBlock(nn.Module):
    def __init__(self, in_channels, out_channels):
        super().__init__()
        self.conv = nn.Conv2d(in_channels, out_channels, kernel_size=3, stride=1, padding=1)

    def forward(self, x):
        return self.conv(x)`,
  "Graph Neural Network": `import torch
import torch.nn as nn

class TorchGNNLayer(nn.Module):
    def __init__(self, in_dim, out_dim):
        super().__init__()
        self.linear = nn.Linear(in_dim, out_dim, bias=False)

    def forward(self, X, A):
        I = torch.eye(A.size(0), device=A.device)
        A_hat = A + I
        D = torch.diag(torch.pow(A_hat.sum(1) + 1e-7, -0.5))
        return torch.relu(D @ A_hat @ D @ self.linear(X))`,
  "Message Passing": `import torch
import torch.nn as nn

class TorchMessagePassing(nn.Module):
    def forward(self, X, edge_index):
        src, dst = edge_index
        out = torch.zeros_like(X)
        out.index_add_(0, dst, X[src])
        degree = torch.bincount(dst, minlength=X.size(0)).clamp(min=1).unsqueeze(1)
        return torch.relu(X + out / degree)`,
  "GCN": `import torch
import torch.nn as nn

class TorchGCNLayer(nn.Module):
    def __init__(self, in_dim, out_dim):
        super().__init__()
        self.linear = nn.Linear(in_dim, out_dim, bias=False)

    def forward(self, X, A):
        A_hat = A + torch.eye(A.size(0), device=A.device)
        D = torch.diag(torch.pow(A_hat.sum(1) + 1e-7, -0.5))
        return torch.relu(D @ A_hat @ D @ self.linear(X))`,
  "GAT": `import torch
import torch.nn as nn
import torch.nn.functional as F

class TorchGATScore(nn.Module):
    def __init__(self, dim):
        super().__init__()
        self.attn = nn.Linear(2 * dim, 1)

    def edge_score(self, h_i, h_j):
        return F.leaky_relu(self.attn(torch.cat([h_i, h_j], dim=-1)))`,
  "GIN": `import torch
import torch.nn as nn

class TorchGINLayer(nn.Module):
    def __init__(self, dim):
        super().__init__()
        self.eps = nn.Parameter(torch.zeros(1))
        self.mlp = nn.Sequential(nn.Linear(dim, dim), nn.ReLU(), nn.Linear(dim, dim))

    def forward(self, x, aggregated_neighbors):
        return self.mlp((1 + self.eps) * x + aggregated_neighbors)`,
  "GVAE": `import torch
import torch.nn as nn

class TorchGVAEHead(nn.Module):
    def reparameterize(self, mu, log_var):
        return mu + torch.exp(0.5 * log_var) * torch.randn_like(mu)

    def decode(self, z):
        return torch.sigmoid(z @ z.t())`,
  "Softmax": `import torch
import torch.nn.functional as F

logits = torch.randn(4, 10)
prob = F.softmax(logits, dim=-1)`,
  "交差エントロピー": `import torch
import torch.nn as nn

criterion = nn.CrossEntropyLoss()
logits = torch.randn(8, 3)
target = torch.randint(0, 3, (8,))
loss = criterion(logits, target)`,
  "誤差逆伝播": `import torch

x = torch.randn(4, 3, requires_grad=True)
W = torch.randn(3, 2, requires_grad=True)
y = x @ W
loss = y.pow(2).mean()
loss.backward()`,
  "Gradient Clipping": `import torch
import torch.nn.utils as utils

model = torch.nn.Linear(8, 1)
loss = model(torch.randn(4, 8)).pow(2).mean()
loss.backward()
utils.clip_grad_norm_(model.parameters(), max_norm=1.0)`,
  "Learning Rate Scheduler": `import torch

model = torch.nn.Linear(8, 1)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3)
scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=100)
optimizer.step()
scheduler.step()`,
  "GraphSAGE": `import torch
import torch.nn as nn

class TorchGraphSAGE(nn.Module):
    def __init__(self, in_dim, out_dim):
        super().__init__()
        self.linear = nn.Linear(2 * in_dim, out_dim)

    def forward(self, self_x, neigh_mean):
        return torch.relu(self.linear(torch.cat([self_x, neigh_mean], dim=-1)))`,
  "偏微分と勾配": `import torch

w = torch.zeros(3, 1, requires_grad=True)
X = torch.randn(8, 3)
y = torch.randn(8, 1)
loss = torch.mean((X @ w - y) ** 2)
loss.backward()
grad_w = w.grad`,
  "連鎖律": `import torch

x = torch.tensor(2.0, requires_grad=True)
y = x ** 2
z = 3 * y
z.backward()
print(x.grad)`,
  "エントロピー": `import torch

p = torch.tensor([0.7, 0.2, 0.1])
entropy = -(p * torch.log(p + 1e-7)).sum()`,
  "KLダイバージェンス": `import torch

p = torch.tensor([0.7, 0.2, 0.1])
q = torch.tensor([0.5, 0.3, 0.2])
kl = (p * (torch.log(p + 1e-7) - torch.log(q + 1e-7))).sum()`,
  "最尤推定": `import torch

logits = torch.randn(16, 3)
target = torch.randint(0, 3, (16,))
nll = torch.nn.functional.cross_entropy(logits, target)`,
  "Batch Gradient Descent": `import torch

model = torch.nn.Linear(4, 1)
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)
X = torch.randn(32, 4)
y = torch.randn(32, 1)
loss = torch.mean((model(X) - y) ** 2)
loss.backward()
optimizer.step()`,
  "Stochastic Gradient Descent": `import torch

model = torch.nn.Linear(4, 1)
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)
for xb, yb in [(torch.randn(8, 4), torch.randn(8, 1))]:
    loss = torch.mean((model(xb) - yb) ** 2)
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()`,
  "Momentum": `import torch

model = torch.nn.Linear(4, 1)
optimizer = torch.optim.SGD(model.parameters(), lr=0.01, momentum=0.9)`,
  "Nesterov Momentum": `import torch

model = torch.nn.Linear(4, 1)
optimizer = torch.optim.SGD(model.parameters(), lr=0.01, momentum=0.9, nesterov=True)`,
  "AdaGrad": `import torch

model = torch.nn.Linear(4, 1)
optimizer = torch.optim.Adagrad(model.parameters(), lr=0.1)`,
  "RMSProp": `import torch

model = torch.nn.Linear(4, 1)
optimizer = torch.optim.RMSprop(model.parameters(), lr=0.001, alpha=0.9)`,
  "L1正則化": `import torch

model = torch.nn.Linear(4, 1)
data_loss = torch.tensor(0.0)
l1 = sum(p.abs().sum() for p in model.parameters())
loss = data_loss + 0.01 * l1`,
  "L2正則化": `import torch

model = torch.nn.Linear(4, 1)
optimizer = torch.optim.SGD(model.parameters(), lr=0.01, weight_decay=0.01)`,
  "Weight Decay": `import torch

model = torch.nn.Linear(4, 1)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3, weight_decay=0.01)`,
  "Layer Normalization": `import torch.nn as nn

layer = nn.LayerNorm(normalized_shape=128)`,
  "Instance Normalization": `import torch.nn as nn

layer = nn.InstanceNorm2d(num_features=32, affine=True)`,
  "Group Normalization": `import torch.nn as nn

layer = nn.GroupNorm(num_groups=8, num_channels=32)`,
  "Dropout": `import torch.nn as nn

layer = nn.Dropout(p=0.5)`,
  "Spatial Dropout": `import torch.nn as nn

layer = nn.Dropout2d(p=0.2)`,
  "Depthwise Separable Convolution": `import torch.nn as nn

class DepthwiseSeparableConv(nn.Module):
    def __init__(self, in_c, out_c):
        super().__init__()
        self.depthwise = nn.Conv2d(in_c, in_c, 3, padding=1, groups=in_c)
        self.pointwise = nn.Conv2d(in_c, out_c, 1)

    def forward(self, x):
        return self.pointwise(self.depthwise(x))`,
  "Residual Connection": `import torch.nn as nn

class ResidualBlock(nn.Module):
    def __init__(self, block):
        super().__init__()
        self.block = block

    def forward(self, x):
        return self.block(x) + x`,
  "RNN": `import torch.nn as nn

rnn = nn.RNN(input_size=16, hidden_size=32, batch_first=True)`,
  "LSTM": `import torch.nn as nn

lstm = nn.LSTM(input_size=16, hidden_size=32, batch_first=True)`,
  "GRU": `import torch.nn as nn

gru = nn.GRU(input_size=16, hidden_size=32, batch_first=True)`,
  "Multi-Head Attention": `import torch.nn as nn

mha = nn.MultiheadAttention(embed_dim=128, num_heads=8, batch_first=True)`,
  "Positional Encoding": `import torch

position = torch.arange(0, 128).unsqueeze(1)
div_term = torch.exp(torch.arange(0, 64, 2) * (-torch.log(torch.tensor(10000.0)) / 64))`,
  "Pre-LN Transformer": `import torch.nn as nn

class PreLNBlock(nn.Module):
    def __init__(self, dim, sublayer):
        super().__init__()
        self.norm = nn.LayerNorm(dim)
        self.sublayer = sublayer

    def forward(self, x):
        return x + self.sublayer(self.norm(x))`,
  "Scaled Dot-Product Attention": `import torch
import torch.nn.functional as F

class TorchScaledAttention:
    def __call__(self, Q, K, V, mask=None):
        d_k = Q.size(-1)
        scores = Q @ K.transpose(-2, -1) / (d_k ** 0.5)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        weights = F.softmax(scores, dim=-1)
        return weights @ V`,
  "AutoEncoder": `import torch.nn as nn

class AutoEncoder(nn.Module):
    def __init__(self):
        super().__init__()
        self.encoder = nn.Linear(784, 32)
        self.decoder = nn.Linear(32, 784)

    def forward(self, x):
        return self.decoder(self.encoder(x))`,
  "Variational AutoEncoder": `import torch
import torch.nn as nn

class VaeHead(nn.Module):
    def reparameterize(self, mu, log_var):
        eps = torch.randn_like(mu)
        return mu + torch.exp(0.5 * log_var) * eps

    def kl_loss(self, mu, log_var):
        return -0.5 * torch.sum(1 + log_var - mu.pow(2) - log_var.exp())`,
  "GAN": `import torch
import torch.nn.functional as F

class GanLoss:
    def discriminator_loss(self, d_real_logits, d_fake_logits):
        real = F.binary_cross_entropy_with_logits(d_real_logits, torch.ones_like(d_real_logits))
        fake = F.binary_cross_entropy_with_logits(d_fake_logits, torch.zeros_like(d_fake_logits))
        return real + fake

    def generator_loss(self, d_fake_logits):
        return F.binary_cross_entropy_with_logits(d_fake_logits, torch.ones_like(d_fake_logits))`,
  "Precision / Recall / F1": `import torch

pred = torch.tensor([1, 0, 1, 1])
target = torch.tensor([1, 0, 0, 1])
tp = ((pred == 1) & (target == 1)).sum()
fp = ((pred == 1) & (target == 0)).sum()
fn = ((pred == 0) & (target == 1)).sum()`,
  "ROC-AUC": `import torch

scores = torch.tensor([0.9, 0.7, 0.4, 0.1])
target = torch.tensor([1, 0, 1, 0])
threshold = 0.5
pred = (scores >= threshold).long()`
};

function getNumpySample(concept) {
  if (numpySamples[concept.title]) {
    return numpySamples[concept.title];
  }

  if (concept.title === "Batch Normalization") {
    return `import numpy as np

class BatchNorm1D:
    def __init__(self, features, momentum=0.9, eps=1e-5):
        self.gamma = np.ones(features)
        self.beta = np.zeros(features)
        self.running_mean = np.zeros(features)
        self.running_var = np.ones(features)
        self.momentum = momentum
        self.eps = eps

    def forward(self, x, training=True):
        if training:
            mean = x.mean(axis=0)
            var = x.var(axis=0)
            self.running_mean = self.momentum * self.running_mean + (1 - self.momentum) * mean
            self.running_var = self.momentum * self.running_var + (1 - self.momentum) * var
        else:
            mean = self.running_mean
            var = self.running_var
        x_hat = (x - mean) / np.sqrt(var + self.eps)
        return self.gamma * x_hat + self.beta`;
  }

  if (concept.title === "Adam") {
    return `import numpy as np

class AdamOptimizer:
    def __init__(self, params, lr=1e-3, beta1=0.9, beta2=0.999, eps=1e-8):
        self.params = params
        self.lr = lr
        self.beta1 = beta1
        self.beta2 = beta2
        self.eps = eps
        self.m = [np.zeros_like(p) for p in params]
        self.v = [np.zeros_like(p) for p in params]
        self.t = 0

    def step(self, grads):
        self.t += 1
        for i, grad in enumerate(grads):
            self.m[i] = self.beta1 * self.m[i] + (1 - self.beta1) * grad
            self.v[i] = self.beta2 * self.v[i] + (1 - self.beta2) * (grad ** 2)
            m_hat = self.m[i] / (1 - self.beta1 ** self.t)
            v_hat = self.v[i] / (1 - self.beta2 ** self.t)
            self.params[i] -= self.lr * m_hat / (np.sqrt(v_hat) + self.eps)`;
  }

  if (concept.title === "GAT") {
    return `import numpy as np

class GraphAttentionLayer:
    def __init__(self, in_features, out_features):
        self.W = np.random.randn(in_features, out_features) * np.sqrt(2 / in_features)
        self.a = np.random.randn(2 * out_features) * 0.01

    def leaky_relu(self, x, alpha=0.2):
        return np.where(x > 0, x, alpha * x)

    def forward(self, X, neighbors):
        Z = X @ self.W
        out = np.zeros_like(Z)
        for i, ns in enumerate(neighbors):
            scores = np.array([self.leaky_relu(self.a @ np.r_[Z[i], Z[j]]) for j in ns])
            weights = np.exp(scores - scores.max())
            weights = weights / weights.sum()
            out[i] = sum(w * Z[j] for w, j in zip(weights, ns))
        return out`;
  }

  if (concept.title === "GIN") {
    return `import numpy as np

class GINLayer:
    def __init__(self, features, eps=0.0):
        self.eps = eps
        self.W1 = np.random.randn(features, features) * np.sqrt(2 / features)
        self.W2 = np.random.randn(features, features) * np.sqrt(2 / features)

    def mlp(self, x):
        h = np.maximum(0, x @ self.W1)
        return h @ self.W2

    def forward(self, X, neighbors):
        out = []
        for v, ns in enumerate(neighbors):
            agg = np.sum([X[u] for u in ns], axis=0)
            out.append(self.mlp((1 + self.eps) * X[v] + agg))
        return np.stack(out)`;
  }

  if (concept.title === "GVAE") {
    return `import numpy as np

class GraphVAE:
    def encode(self, X, A, W_mu, W_logvar):
        A_hat = A + np.eye(A.shape[0])
        H = A_hat @ X
        mu = H @ W_mu
        log_var = H @ W_logvar
        return mu, log_var

    def reparameterize(self, mu, log_var):
        eps = np.random.randn(*mu.shape)
        return mu + np.exp(0.5 * log_var) * eps

    def decode(self, Z):
        logits = Z @ Z.T
        return 1 / (1 + np.exp(-logits))`;
  }

  if (concept.category === "GNN") {
    return `import numpy as np

class SimpleGraphLayer:
    def __init__(self, in_features, out_features):
        scale = np.sqrt(2 / in_features)
        self.W = np.random.randn(in_features, out_features) * scale

    def normalize_adjacency(self, A):
        A_hat = A + np.eye(A.shape[0])
        degree = A_hat.sum(axis=1)
        D_inv_sqrt = np.diag(1 / np.sqrt(degree + 1e-7))
        return D_inv_sqrt @ A_hat @ D_inv_sqrt

    def forward(self, X, A):
        A_norm = self.normalize_adjacency(A)
        H = A_norm @ X @ self.W
        return np.maximum(0, H)

X = np.random.randn(5, 3)
A = np.array([[0,1,1,0,0],[1,0,0,1,0],[1,0,0,0,1],[0,1,0,0,1],[0,0,1,1,0]])
layer = SimpleGraphLayer(in_features=3, out_features=4)
node_embeddings = layer.forward(X, A)`;
  }

  if (concept.category === "CNN") {
    return `import numpy as np

class Conv2D:
    def __init__(self, kernel_size, stride=1, padding=0):
        self.stride = stride
        self.padding = padding
        self.kernel = np.random.randn(kernel_size, kernel_size) * 0.01

    def forward(self, x):
        x = np.pad(x, ((self.padding, self.padding), (self.padding, self.padding)))
        kh, kw = self.kernel.shape
        oh = (x.shape[0] - kh) // self.stride + 1
        ow = (x.shape[1] - kw) // self.stride + 1
        out = np.zeros((oh, ow))
        for i in range(oh):
            for j in range(ow):
                patch = x[i*self.stride:i*self.stride+kh, j*self.stride:j*self.stride+kw]
                out[i, j] = np.sum(patch * self.kernel)
        return out`;
  }

  if (concept.category === "正規化") {
    return `import numpy as np

class NormalizationLayer:
    def __init__(self, features, eps=1e-5):
        self.gamma = np.ones(features)
        self.beta = np.zeros(features)
        self.eps = eps

    def layer_norm(self, x):
        mean = x.mean(axis=-1, keepdims=True)
        var = x.var(axis=-1, keepdims=True)
        x_hat = (x - mean) / np.sqrt(var + self.eps)
        return self.gamma * x_hat + self.beta

x = np.random.randn(4, 8)
norm = NormalizationLayer(features=8)
y = norm.layer_norm(x)`;
  }

  return `# ${concept.title} のNumPy確認用コード
import numpy as np

class ConceptExample:
    def run(self):
        # 用語カードで示した最小実装を、詳細ページでも確認できるようにしています。
${concept.code.split("\n").map((line) => `        ${line}`).join("\n")}
`;
}

function getTorchSample(concept) {
  if (torchSamples[concept.title]) {
    return torchSamples[concept.title];
  }

  if (concept.title === "Batch Normalization") {
    return `import torch
import torch.nn as nn

class TorchBatchNormBlock(nn.Module):
    def __init__(self, features):
        super().__init__()
        self.norm = nn.BatchNorm1d(features)
        self.proj = nn.Linear(features, features)

    def forward(self, x):
        x = self.norm(x)
        return torch.relu(self.proj(x))`;
  }

  if (concept.title === "Adam") {
    return `import torch
import torch.nn as nn

model = nn.Linear(8, 1)
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)
criterion = nn.MSELoss()

x = torch.randn(16, 8)
target = torch.randn(16, 1)
pred = model(x)
loss = criterion(pred, target)
loss.backward()
optimizer.step()
optimizer.zero_grad()`;
  }

  if (concept.category === "GNN") {
    return `import torch
import torch.nn as nn

class TorchGCNLayer(nn.Module):
    def __init__(self, in_features, out_features):
        super().__init__()
        self.linear = nn.Linear(in_features, out_features, bias=False)

    def normalize_adjacency(self, A):
        I = torch.eye(A.size(0), device=A.device)
        A_hat = A + I
        degree = A_hat.sum(dim=1)
        D_inv_sqrt = torch.diag(torch.pow(degree + 1e-7, -0.5))
        return D_inv_sqrt @ A_hat @ D_inv_sqrt

    def forward(self, X, A):
        A_norm = self.normalize_adjacency(A)
        return torch.relu(A_norm @ self.linear(X))`;
  }

  if (concept.category === "CNN") {
    return `import torch
import torch.nn as nn

class TorchConvBlock(nn.Module):
    def __init__(self, in_channels, out_channels):
        super().__init__()
        self.block = nn.Sequential(
            nn.Conv2d(in_channels, out_channels, kernel_size=3, padding=1),
            nn.BatchNorm2d(out_channels),
            nn.ReLU()
        )

    def forward(self, x):
        return self.block(x)`;
  }

  if (concept.category === "正規化") {
    return `import torch
import torch.nn as nn

class TorchLayerNormBlock(nn.Module):
    def __init__(self, features):
        super().__init__()
        self.norm = nn.LayerNorm(features)
        self.proj = nn.Linear(features, features)

    def forward(self, x):
        x = self.norm(x)
        return torch.relu(self.proj(x))`;
  }

  return `# ${concept.title} のPyTorch確認用コード
import torch

# この用語はPyTorchの特定レイヤーに一対一対応しない場合があります。
# NumPy実装と数式を見ながら、テンソル演算として対応を確認してください。
x = torch.tensor(0.0, requires_grad=True)
y = x + 0
y.backward()`;
}

function getExecutionDemo(concept) {
  const demos = {
    "スライス": {
      code: "x = np.arange(10)\nprint(x[2:8:2])",
      output: "[2 4 6]",
      explanation: "index 2から開始し、stopの8は含めず、2つおきに要素を取得します。"
    },
    "np.dotと行列積": {
      code: "X = np.array([[1, 2], [3, 4]])\nW = np.array([[2], [1]])\nprint(X @ W)",
      output: "[[ 4]\n [10]]",
      explanation: "各行とWの列の内積を計算します。1行目は1×2+2×1=4、2行目は3×2+4×1=10です。"
    },
    "ブロードキャスト": {
      code: "X = np.array([[1, 2, 3], [4, 5, 6]])\nb = np.array([10, 20, 30])\nprint(X + b)",
      output: "[[11 22 33]\n [14 25 36]]",
      explanation: "shape (3,) のbが各行へ暗黙に拡張され、列ごとに同じ値が加算されます。"
    },
    "期待値と分散": {
      code: "values = np.array([0, 1, 2])\np = np.array([0.2, 0.5, 0.3])\nprint(np.sum(values * p))",
      output: "1.1",
      explanation: "各値をその確率で重み付けして合計し、確率変数の平均的位置を求めます。"
    },
    "正規分布": {
      code: "x = np.random.default_rng(0).normal(5, 2, 100000)\nprint(round(x.mean(), 2), round(x.std(), 2))",
      output: "約 5.00 2.00",
      explanation: "標本数を十分大きくすると、標本平均と標準偏差が指定した母平均5、母標準偏差2へ近づきます。"
    },
    "Softmax": {
      code: "logits = np.array([2.0, 1.0, 0.0])\nz = logits - logits.max()\np = np.exp(z) / np.exp(z).sum()\nprint(np.round(p, 3), p.sum())",
      output: "[0.665 0.245 0.090] 1.0",
      explanation: "大きいロジットほど高い確率になります。出力は非負で、全クラスの合計は1です。"
    },
    "畳み込み": {
      code: "x = np.array([[1,2,0],[0,1,3],[2,1,0]])\nk = np.array([[1,0],[0,-1]])\nprint(np.sum(x[:2,:2] * k))",
      output: "0",
      explanation: "左上2×2領域とカーネルを要素積し、合計して1つの特徴値を作ります。カーネルを滑らせて出力マップを得ます。"
    },
    "GCN": {
      code: "A_hat = A + np.eye(A.shape[0])\nH_next = D_inv_sqrt @ A_hat @ D_inv_sqrt @ X @ W\nprint(H_next.shape)",
      output: "(ノード数, 出力特徴数)",
      explanation: "各ノードの特徴に、正規化された自己特徴と近傍特徴が混ざり、ノードごとの新しい埋め込みが得られます。"
    }
  };

  return demos[concept.title] || {
    code: concept.code,
    output: `${concept.title}に対応する変換後の値・損失・埋め込み・統計量が得られます。`,
    explanation: `${concept.body} 入力配列のshapeを確認し、処理前後でどの軸・値・表現が変わったかを比較してください。`
  };
}

function getTermDetail(concept) {
  const detail = termDetails[concept.title] || {
    formula: getFormulaForConcept(concept),
    detail: getDetailedExplanation(concept),
    code: getNumpySample(concept),
    points: termStudyPoints[concept.title] || ["この用語固有の入力と出力を確認する", "数式の各記号と実装の変数を対応させる", "学習時と推論時で変化する処理があるか確認する"]
  };

  return {
    ...detail,
    points: termStudyPoints[concept.title] || detail.points,
    numpyCode: detail.numpyCode || getNumpySample(concept),
    torchCode: detail.torchCode || getTorchSample(concept),
    answerGuide: detail.answerGuide || getAnswerGuide(concept),
    executionDemo: detail.executionDemo || getExecutionDemo(concept)
  };
}

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressKey)) || {};
  } catch {
    return {};
  }
}

function writeProgress(progress) {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function renderRoadmap() {
  const progress = readProgress();
  roadmapList.innerHTML = "";

  roadmap.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "step";
    article.innerHTML = `
      <div>
        <p class="eyebrow">Step ${index + 1}</p>
        <h3>${item.title}</h3>
      </div>
      <p>${item.body}</p>
      <label class="check-row">
        <input type="checkbox" ${progress[index] ? "checked" : ""}>
        完了
      </label>
    `;

    const checkbox = article.querySelector("input");
    checkbox.addEventListener("change", () => {
      const nextProgress = readProgress();
      nextProgress[index] = checkbox.checked;
      writeProgress(nextProgress);
    });

    roadmapList.appendChild(article);
  });
}

function renderConcepts() {
  conceptGrid.innerHTML = concepts.map((concept) => `
    <article class="concept concept-link" id="term-card-${slugifyTerm(concept.title)}" tabindex="0" role="link" data-term="${slugifyTerm(concept.title)}">
      <span class="tag">${concept.category}</span>
      <h3>${concept.title}</h3>
      <p>${concept.body}</p>
      <pre><code>${escapeHtml(concept.code)}</code></pre>
      <a class="detail-link" href="#term-${slugifyTerm(concept.title)}">詳細を見る</a>
    </article>
  `).join("");

  conceptGrid.querySelectorAll(".concept-link").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      location.hash = `term-${card.dataset.term}`;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        location.hash = `term-${card.dataset.term}`;
      }
    });
  });
}

function renderTermDetailFromHash() {
  if (!location.hash.startsWith("#term-")) {
    termDetailSection.hidden = true;
    return;
  }

  const slug = location.hash.replace("#term-", "");
  const concept = concepts.find((item) => slugifyTerm(item.title) === slug);
  if (!concept) {
    termDetailSection.hidden = true;
    return;
  }

  const detail = getTermDetail(concept);
  termDetailSection.hidden = false;
  termDetail.innerHTML = `
    <a class="back-link" href="#concepts">用語一覧へ戻る</a>
    <div class="term-hero">
      <span class="tag">${concept.category}</span>
      <h2 id="termDetailTitle">${concept.title}</h2>
      <p>${detail.detail}</p>
    </div>
    <div class="detail-grid">
      <section class="detail-block">
        <h3>数式・考え方</h3>
        <div class="math-formula">\\[${detail.formula.replace(/^\\displaystyle\s*/, "")}\\]</div>
      </section>
      <section class="detail-block detail-wide">
        <h3>説明するときの回答例</h3>
        <ol class="answer-guide">
          ${detail.answerGuide.map((answer) => `<li>${answer}</li>`).join("")}
        </ol>
      </section>
      <section class="detail-block">
        <h3>NumPy実装例</h3>
        <pre><code>${escapeHtml(detail.numpyCode)}</code></pre>
      </section>
      <section class="detail-block">
        <h3>PyTorch実装例</h3>
        <pre><code>${escapeHtml(detail.torchCode)}</code></pre>
      </section>
      <section class="detail-block detail-wide">
        <h3>実行例と得られる結果</h3>
        <div class="execution-demo">
          <div>
            <p class="sample-title">入力・実行</p>
            <pre><code>${escapeHtml(detail.executionDemo.code)}</code></pre>
          </div>
          <div>
            <p class="sample-title">結果</p>
            <pre><code>${escapeHtml(detail.executionDemo.output)}</code></pre>
            <p>${detail.executionDemo.explanation}</p>
          </div>
        </div>
      </section>
      <section class="detail-block detail-wide">
        <h3>試験で押さえるポイント</h3>
        <ul>
          ${detail.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise([termDetail]);
  }
  termDetailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createLossSeries(rate, epochCount) {
  const points = [];
  let loss = 1;

  for (let i = 1; i <= epochCount; i += 1) {
    const instability = rate > 0.2 ? Math.sin(i * rate * 8) * 0.08 : 0;
    const decay = Math.max(0.02, 1 - rate * 2.8);
    loss = Math.max(0.03, loss * decay + instability + 0.018);
    points.push(Number(loss.toFixed(3)));
  }

  return points;
}

function drawChart(points) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 42;
  const plotWidth = width - padding * 2;
  const plotHeight = height - padding * 2;
  const max = Math.max(...points, 1);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfdfc";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#d9e2e8";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i += 1) {
    const y = padding + (plotHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  ctx.strokeStyle = "#16817a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = padding + (plotWidth / Math.max(1, points.length - 1)) * index;
    const y = padding + plotHeight - (point / max) * plotHeight;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  ctx.fillStyle = "#172026";
  ctx.font = "700 18px Segoe UI, sans-serif";
  ctx.fillText("Loss", padding, 28);
  ctx.fillText("Epoch", width - 112, height - 14);
}

function updateExperiment() {
  const rate = Number(learningRate.value);
  const epochCount = Number(epochs.value);
  learningRateValue.textContent = rate.toFixed(2);
  epochsValue.textContent = String(epochCount);

  const points = createLossSeries(rate, epochCount);
  drawChart(points);

  const first = points[0];
  const last = points[points.length - 1];
  if (rate > 0.2) {
    labInsight.textContent = "学習率が高めなので、損失が揺れやすくなっています。発散や振動のイメージを確認できます。";
  } else if (last < first * 0.45) {
    labInsight.textContent = "損失が順調に下がっています。学習率とエポックのバランスが良い状態です。";
  } else {
    labInsight.textContent = "損失の下がり方がゆるやかです。学習率やエポックを少し増やして比較しましょう。";
  }
}

function renderExplanation(item, isCorrect) {
  quizResult.innerHTML = `
    <div class="${isCorrect ? "result-correct" : "result-wrong"}">${isCorrect ? "正解" : "復習ポイント"}</div>
    <p>${item.explain}</p>
    <p class="sample-title">Pythonサンプル</p>
    <pre><code>${escapeHtml(item.code)}</code></pre>
  `;
}

function normalizeAnswer(value) {
  return value.replace(/\s+/g, "").toLowerCase();
}

function initializeQuizBrowser() {
  const categories = ["すべて", ...new Set(quizItems.map((item) => item.category))];
  quizCategory.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  updateQuizBrowser();
}

function updateQuizBrowser() {
  const category = quizCategory.value || "すべて";
  filteredQuizIndexes = quizItems
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => category === "すべて" || item.category === category)
    .map(({ index }) => index);

  if (!filteredQuizIndexes.includes(currentQuiz)) {
    currentQuiz = filteredQuizIndexes[0] ?? 0;
  }

  quizSelect.innerHTML = filteredQuizIndexes.map((index) => {
    const item = quizItems[index];
    return `<option value="${index}">Q${index + 1}: ${item.question}</option>`;
  }).join("");
  quizSelect.value = String(currentQuiz);

  questionGrid.innerHTML = filteredQuizIndexes.map((index) => `
    <button class="question-number ${index === currentQuiz ? "active" : ""}" type="button" data-index="${index}" title="${quizItems[index].question}">
      ${index + 1}
    </button>
  `).join("");

  questionGrid.querySelectorAll(".question-number").forEach((button) => {
    button.addEventListener("click", () => {
      currentQuiz = Number(button.dataset.index);
      renderQuiz();
    });
  });
}

function drawQuizChart(spec) {
  quizChartPanel.hidden = !spec;
  if (!spec) return;

  const ctx = quizChart.getContext("2d");
  const width = quizChart.width;
  const height = quizChart.height;
  const padding = 48;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfdfc";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#b8c6cf";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, 20);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - 20, height - padding);
  ctx.stroke();

  if (spec.type === "histogram") {
    const max = Math.max(...spec.values);
    const barWidth = (width - padding - 40) / spec.values.length;
    spec.values.forEach((value, index) => {
      const barHeight = value / max * (height - padding - 50);
      ctx.fillStyle = "#16817a";
      ctx.fillRect(padding + index * barWidth + 2, height - padding - barHeight, barWidth - 4, barHeight);
    });
  }

  if (spec.type === "scatter") {
    const xs = spec.points.map((p) => p[0]);
    const ys = spec.points.map((p) => p[1]);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    spec.points.forEach(([x, y]) => {
      const px = padding + (x - minX) / (maxX - minX || 1) * (width - padding - 40);
      const py = height - padding - (y - minY) / (maxY - minY || 1) * (height - padding - 40);
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#2f6fdd";
      ctx.fill();
    });
  }

  if (spec.type === "boxplot") {
    const min = spec.values[0], q1 = spec.values[1], median = spec.values[2], q3 = spec.values[3], max = spec.values[4];
    const scale = (value) => padding + (value - min) / (max - min || 1) * (width - padding - 50);
    const y = height / 2;
    ctx.strokeStyle = "#172026";
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(scale(min), y); ctx.lineTo(scale(max), y); ctx.stroke();
    ctx.fillStyle = "rgba(242, 193, 78, 0.45)";
    ctx.fillRect(scale(q1), y - 48, scale(q3) - scale(q1), 96);
    ctx.strokeRect(scale(q1), y - 48, scale(q3) - scale(q1), 96);
    ctx.beginPath(); ctx.moveTo(scale(median), y - 48); ctx.lineTo(scale(median), y + 48); ctx.stroke();
  }

  ctx.fillStyle = "#172026";
  ctx.font = "700 18px Segoe UI, sans-serif";
  ctx.fillText(spec.title, padding, 18);
}

function renderQuiz() {
  const item = quizItems[currentQuiz];
  const filteredPosition = filteredQuizIndexes.indexOf(currentQuiz);
  questionCounter.textContent = `Q${currentQuiz + 1} / 全${quizItems.length}問（絞り込み ${filteredPosition + 1}/${filteredQuizIndexes.length}）`;
  questionType.textContent = `${item.category} / ${item.type}`;
  questionText.textContent = item.question;
  drawQuizChart(item.chart);
  codePrompt.textContent = item.codePrompt || "";
  codePrompt.hidden = !item.codePrompt;
  answerList.innerHTML = "";
  fillAnswer.innerHTML = "";
  quizResult.innerHTML = "";

  if (item.answers) {
    item.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.className = "answer";
      button.type = "button";
      button.textContent = answer;
      button.addEventListener("click", () => {
        const isCorrect = index === item.correct;
        button.classList.add(isCorrect ? "correct" : "wrong");
        renderExplanation(item, isCorrect);
      });
      answerList.appendChild(button);
    });
  } else {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "空欄に入るPython式を入力";
    input.autocomplete = "off";

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "答え合わせ";
    button.addEventListener("click", () => {
      const normalized = normalizeAnswer(input.value);
      const isCorrect = item.accepted.some((answer) => normalizeAnswer(answer) === normalized);
      input.className = isCorrect ? "fill-correct" : "fill-wrong";
      renderExplanation(item, isCorrect);
    });

    fillAnswer.append(input, button);
  }

  quizSelect.value = String(currentQuiz);
  updateQuizBrowser();
  prevQuestion.disabled = filteredPosition <= 0;
  nextQuestion.disabled = filteredPosition === -1 || filteredPosition >= filteredQuizIndexes.length - 1;
}

renderRoadmap();
renderConcepts();
initializeQuizBrowser();
renderQuiz();
updateExperiment();
renderTermDetailFromHash();

learningRate.addEventListener("input", updateExperiment);
epochs.addEventListener("input", updateExperiment);
runExperiment.addEventListener("click", updateExperiment);
window.addEventListener("hashchange", renderTermDetailFromHash);
quizCategory.addEventListener("change", () => {
  updateQuizBrowser();
  renderQuiz();
});
quizSelect.addEventListener("change", () => {
  currentQuiz = Number(quizSelect.value);
  renderQuiz();
});
prevQuestion.addEventListener("click", () => {
  const position = filteredQuizIndexes.indexOf(currentQuiz);
  currentQuiz = filteredQuizIndexes[Math.max(0, position - 1)];
  renderQuiz();
});
nextQuestion.addEventListener("click", () => {
  const position = filteredQuizIndexes.indexOf(currentQuiz);
  currentQuiz = filteredQuizIndexes[Math.min(filteredQuizIndexes.length - 1, position + 1)];
  renderQuiz();
});
