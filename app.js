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
const codePrompt = document.querySelector("#codePrompt");
const answerList = document.querySelector("#answerList");
const fillAnswer = document.querySelector("#fillAnswer");
const quizResult = document.querySelector("#quizResult");
const prevQuestion = document.querySelector("#prevQuestion");
const nextQuestion = document.querySelector("#nextQuestion");

let currentQuiz = 0;

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
    "偏微分と勾配": "\\displaystyle \\nabla_w L=\\left[\\frac{\\partial L}{\\partial w_1},\\ldots,\\frac{\\partial L}{\\partial w_n}\\right]",
    "連鎖律": "\\displaystyle \\frac{\\partial z}{\\partial x}=\\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial x}",
    "エントロピー": "\\displaystyle H(p)=-\\sum_x p(x)\\log p(x)",
    "KLダイバージェンス": "\\displaystyle D_{KL}(p\\|q)=\\sum_x p(x)\\log\\frac{p(x)}{q(x)}",
    "最尤推定": "\\displaystyle \\hat{\\theta}=\\arg\\max_\\theta \\prod_{i=1}^N p(x_i|\\theta)",
    "Batch Gradient Descent": "\\displaystyle \\theta_{t+1}=\\theta_t-\\eta\\nabla_\\theta L(\\theta;X)",
    "Stochastic Gradient Descent": "\\displaystyle \\theta_{t+1}=\\theta_t-\\eta\\nabla_\\theta L(\\theta;x_i,y_i)",
    "Momentum": "\\displaystyle v_t=\\mu v_{t-1}-\\eta g_t,\\quad \\theta_{t+1}=\\theta_t+v_t",
    "Nesterov Momentum": "\\displaystyle g_t=\\nabla L(\\theta_t+\\mu v_{t-1}),\\quad v_t=\\mu v_{t-1}-\\eta g_t",
    "AdaGrad": "\\displaystyle \\theta_{t+1}=\\theta_t-\\frac{\\eta}{\\sqrt{G_t}+\\epsilon}g_t",
    "RMSProp": "\\displaystyle E[g^2]_t=\\rho E[g^2]_{t-1}+(1-\\rho)g_t^2",
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

  return guides[concept.title] || [
    `${concept.title}は、まず「何を入力に取り、何を出力するか」を説明すると整理しやすいです。`,
    `次に、数式の各記号が実装上のどの配列やテンソルに対応するかを確認します。特にshape、正規化する軸、softmaxや集約を行う軸は丁寧に見ると理解が深まります。`,
    `最後に、学習時と推論時で挙動が変わるか、勾配がどの経路を通るか、計算量や安定性にどんな注意点があるかを自分の言葉で説明できるようにします。`
  ];
}

function getNumpySample(concept) {
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

  return `import numpy as np

class StudyModule:
    def __init__(self, in_features, out_features):
        scale = np.sqrt(2 / max(1, in_features))
        self.W = np.random.randn(in_features, out_features) * scale
        self.b = np.zeros(out_features)

    def forward(self, x):
        z = x @ self.W + self.b
        return np.maximum(0, z)

    def mse_loss(self, pred, target):
        diff = pred - target
        return np.mean(diff ** 2)

    def step(self, x, target, lr=0.01):
        pred = self.forward(x)
        loss = self.mse_loss(pred, target)
        grad_out = 2 * (pred - target) / len(x)
        grad_z = grad_out * (pred > 0)
        grad_W = x.T @ grad_z
        grad_b = grad_z.sum(axis=0)
        self.W -= lr * grad_W
        self.b -= lr * grad_b
        return loss`;
}

function getTorchSample(concept) {
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

  return `import torch
import torch.nn as nn

class TorchStudyModule(nn.Module):
    def __init__(self, in_features, out_features):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_features, out_features),
            nn.ReLU(),
            nn.Linear(out_features, out_features)
        )

    def forward(self, x):
        return self.net(x)

model = TorchStudyModule(8, 4)
x = torch.randn(16, 8)
y = model(x)`;
}

function getTermDetail(concept) {
  const detail = termDetails[concept.title] || {
    formula: getFormulaForConcept(concept),
    detail: getDetailedExplanation(concept),
    code: getNumpySample(concept),
    points: ["定義と目的を説明できるようにする", "NumPyコードと数式の対応を見る", "学習時・推論時・評価時の違いを確認する"]
  };

  return {
    ...detail,
    numpyCode: detail.numpyCode || getNumpySample(concept),
    torchCode: detail.torchCode || getTorchSample(concept),
    answerGuide: detail.answerGuide || getAnswerGuide(concept)
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

function renderQuiz() {
  const item = quizItems[currentQuiz];
  questionCounter.textContent = `${currentQuiz + 1} / ${quizItems.length}`;
  questionType.textContent = `${item.category} / ${item.type}`;
  questionText.textContent = item.question;
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

  prevQuestion.disabled = currentQuiz === 0;
  nextQuestion.disabled = currentQuiz === quizItems.length - 1;
}

renderRoadmap();
renderConcepts();
renderQuiz();
updateExperiment();
renderTermDetailFromHash();

learningRate.addEventListener("input", updateExperiment);
epochs.addEventListener("input", updateExperiment);
runExperiment.addEventListener("click", updateExperiment);
window.addEventListener("hashchange", renderTermDetailFromHash);
prevQuestion.addEventListener("click", () => {
  currentQuiz = Math.max(0, currentQuiz - 1);
  renderQuiz();
});
nextQuestion.addEventListener("click", () => {
  currentQuiz = Math.min(quizItems.length - 1, currentQuiz + 1);
  renderQuiz();
});
