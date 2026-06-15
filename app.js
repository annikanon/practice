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
  }
];

const progressKey = "ml-studio-progress";
const roadmapList = document.querySelector("#roadmapList");
const conceptGrid = document.querySelector("#conceptGrid");
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

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
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
    <article class="concept">
      <span class="tag">${concept.category}</span>
      <h3>${concept.title}</h3>
      <p>${concept.body}</p>
      <pre><code>${escapeHtml(concept.code)}</code></pre>
    </article>
  `).join("");
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

learningRate.addEventListener("input", updateExperiment);
epochs.addEventListener("input", updateExperiment);
runExperiment.addEventListener("click", updateExperiment);
prevQuestion.addEventListener("click", () => {
  currentQuiz = Math.max(0, currentQuiz - 1);
  renderQuiz();
});
nextQuestion.addEventListener("click", () => {
  currentQuiz = Math.min(quizItems.length - 1, currentQuiz + 1);
  renderQuiz();
});
