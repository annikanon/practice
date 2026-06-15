const roadmap = [
  {
    title: "数学と最適化",
    body: "線形代数、微分、確率、勾配降下法、連鎖律を確認します。E資格では式の意味と実装の対応が重要です。"
  },
  {
    title: "機械学習の基礎",
    body: "汎化、過学習、正則化、評価指標、交差検証、バイアス・バリアンスを整理します。"
  },
  {
    title: "深層学習の中核",
    body: "誤差逆伝播、活性化関数、初期化、BatchNorm、Dropout、最適化手法を重点的に扱います。"
  },
  {
    title: "主要アーキテクチャ",
    body: "CNN、RNN/LSTM、Attention、Transformer、AutoEncoder、生成モデルの目的と構造を学びます。"
  }
];

const concepts = [
  {
    title: "勾配降下法",
    body: "損失関数を小さくする方向へパラメータを更新する最適化手法です。更新式は w = w - lr * grad です。",
    code: "w = w - learning_rate * grad_w"
  },
  {
    title: "交差エントロピー",
    body: "分類問題でよく使う損失関数です。正解クラスの予測確率が低いほど損失が大きくなります。",
    code: "loss = -np.sum(y_true * np.log(y_pred + 1e-7))"
  },
  {
    title: "Batch Normalization",
    body: "ミニバッチ内の平均と分散で中間表現を正規化し、学習を安定させます。推論時は移動平均を使います。",
    code: "x_hat = (x - x.mean(axis=0)) / np.sqrt(x.var(axis=0) + eps)"
  },
  {
    title: "Dropout",
    body: "学習時に一部のユニットを無効化して共適応を抑える正則化です。推論時の扱いに注意します。",
    code: "mask = (np.random.rand(*x.shape) > p) / (1 - p)\ny = x * mask"
  },
  {
    title: "畳み込み",
    body: "画像などの局所パターンをフィルタで抽出します。パディング、ストライド、出力サイズの計算が頻出です。",
    code: "out_h = (h + 2 * pad - kernel) // stride + 1"
  },
  {
    title: "Self-Attention",
    body: "系列中の各トークンが他のトークンをどれだけ参照するかを重み付けします。Q, K, V の関係を押さえます。",
    code: "scores = Q @ K.T / np.sqrt(d_k)\nweights = softmax(scores)\nout = weights @ V"
  }
];

const quizItems = [
  {
    type: "選択問題",
    question: "ReLUの説明として最も適切なものはどれか。",
    answers: ["入力が正ならそのまま通し、負なら0にする", "全入力を0から1の確率に変換する", "系列データの長期依存だけを扱う"],
    correct: 0,
    explain: "ReLUは max(0, x) で定義されます。勾配消失を緩和しやすく計算も軽い一方、負側で勾配が0になるためDead ReLUが起きることがあります。",
    code: "def relu(x):\n    return np.maximum(0, x)"
  },
  {
    type: "穴埋め",
    question: "シグモイド関数の実装で空欄に入る式はどれか。",
    codePrompt: "def sigmoid(x):\n    return 1 / (1 + ____)",
    accepted: ["np.exp(-x)", "exp(-x)"],
    explain: "シグモイドは 1 / (1 + exp(-x)) です。二値分類の出力やゲート機構で使われますが、極端な入力では勾配が小さくなります。",
    code: "def sigmoid(x):\n    return 1 / (1 + np.exp(-x))"
  },
  {
    type: "選択問題",
    question: "ソフトマックスと交差エントロピーを組み合わせる主な理由はどれか。",
    answers: ["多クラス分類で正解クラスの対数尤度を最大化するため", "回帰の平均二乗誤差を必ず0にするため", "畳み込み層の出力サイズを固定するため"],
    correct: 0,
    explain: "softmaxはロジットをクラス確率に変換し、交差エントロピーは正解クラスの負の対数確率を損失にします。実装では数値安定化のためlog-sum-expを使います。",
    code: "z = logits - np.max(logits, axis=1, keepdims=True)\nprobs = np.exp(z) / np.sum(np.exp(z), axis=1, keepdims=True)\nloss = -np.mean(np.log(probs[np.arange(n), y] + 1e-7))"
  },
  {
    type: "穴埋め",
    question: "勾配降下法の更新式として空欄に入るものはどれか。",
    codePrompt: "w = w - learning_rate * ____",
    accepted: ["grad_w", "gradient", "dw"],
    explain: "パラメータは損失の勾配方向とは逆向きに更新します。learning_rateが大きすぎると発散、小さすぎると収束が遅くなります。",
    code: "grad_w = np.dot(x.T, (y_pred - y)) / len(x)\nw = w - learning_rate * grad_w"
  },
  {
    type: "選択問題",
    question: "Batch Normalizationの推論時の挙動として正しいものはどれか。",
    answers: ["学習中に蓄積した移動平均と移動分散を使う", "推論データ1件だけの平均と分散で必ず正規化する", "Dropout率を2倍にして正規化する"],
    correct: 0,
    explain: "BatchNormは学習時にミニバッチ統計量を使い、推論時には学習中に更新したrunning mean/varianceを使います。学習時と推論時で挙動が違う代表例です。",
    code: "x_hat = (x - running_mean) / np.sqrt(running_var + eps)\ny = gamma * x_hat + beta"
  },
  {
    type: "穴埋め",
    question: "Dropoutのinverted dropout実装で、学習時のスケール補正として空欄に入るものはどれか。",
    codePrompt: "mask = (np.random.rand(*x.shape) > p) / ____\ny = x * mask",
    accepted: ["(1 - p)", "1-p", "keep_prob"],
    explain: "inverted dropoutでは学習時に残したユニットを 1 / (1 - p) で補正します。これにより推論時はスケール変更なしで使いやすくなります。",
    code: "p = 0.5\nmask = (np.random.rand(*x.shape) > p) / (1 - p)\ny_train = x * mask"
  },
  {
    type: "選択問題",
    question: "畳み込み層の出力サイズ H_out を求める式として正しいものはどれか。",
    answers: ["(H + 2P - F) / S + 1", "H * F + P - S", "(H - P + S) / F"],
    correct: 0,
    explain: "入力高さH、パディングP、フィルタサイズF、ストライドSなら H_out = floor((H + 2P - F) / S) + 1 です。幅方向も同様に計算します。",
    code: "h_out = (h + 2 * pad - filter_size) // stride + 1"
  },
  {
    type: "穴埋め",
    question: "Self-Attentionのスコア計算で、スケーリングに使う分母として空欄に入るものはどれか。",
    codePrompt: "scores = Q @ K.T / ____",
    accepted: ["np.sqrt(d_k)", "sqrt(d_k)", "math.sqrt(d_k)"],
    explain: "Scaled Dot-Product Attentionでは QK^T を sqrt(d_k) で割ります。内積値が大きくなりすぎてsoftmaxが飽和するのを抑えるためです。",
    code: "scores = Q @ K.T / np.sqrt(d_k)\nweights = softmax(scores)\nout = weights @ V"
  },
  {
    type: "選択問題",
    question: "AdamがMomentumやRMSPropと関係する点として最も適切なものはどれか。",
    answers: ["勾配の一次モーメントと二次モーメントを使って更新する", "重みを常に0に近づけるだけの正則化である", "畳み込み専用の活性化関数である"],
    correct: 0,
    explain: "Adamは勾配の移動平均mと二乗勾配の移動平均vを使い、バイアス補正を行って更新します。学習率の実効値をパラメータごとに調整できます。",
    code: "m = beta1 * m + (1 - beta1) * grad\nv = beta2 * v + (1 - beta2) * grad**2\nw -= lr * m_hat / (np.sqrt(v_hat) + eps)"
  },
  {
    type: "選択問題",
    question: "過学習を抑える方法として不適切なものはどれか。",
    answers: ["訓練データだけに完全適合するまで必ず学習を続ける", "L2正則化を加える", "早期終了を使う"],
    correct: 0,
    explain: "訓練データへの適合だけを追うと汎化性能が下がることがあります。検証データの損失、正則化、データ拡張、Dropoutなどを組み合わせて判断します。",
    code: "if val_loss > best_val_loss:\n    patience_count += 1\nelse:\n    best_val_loss = val_loss"
  },
  {
    type: "穴埋め",
    question: "L2正則化を損失に加える実装として空欄に入るものはどれか。",
    codePrompt: "loss = data_loss + lambda_ * ____",
    accepted: ["np.sum(w ** 2)", "np.sum(w**2)", "sum(w ** 2)", "sum(w**2)"],
    explain: "L2正則化は重みの二乗和にペナルティを与えます。重みが大きくなりすぎることを抑え、モデルの複雑さを制御します。",
    code: "data_loss = cross_entropy(y_true, y_pred)\nloss = data_loss + lambda_ * np.sum(w ** 2)"
  },
  {
    type: "選択問題",
    question: "勾配消失が特に問題になりやすい状況はどれか。",
    answers: ["深いネットワークでシグモイドやtanhが飽和する場合", "ReLUの正の入力だけを1層で扱う場合", "損失関数を計算しない場合だけ"],
    correct: 0,
    explain: "シグモイドやtanhは入力が大きい領域で微分値が小さくなります。深い層を逆伝播するほど勾配が小さくなり、初期層が学習しにくくなります。",
    code: "sigmoid_grad = sigmoid(x) * (1 - sigmoid(x))"
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
  questionType.textContent = item.type;
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
