---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, I am <strong>En Yu</strong> (于恩 in Chinese), a PhD student at <a href="https://www.hust.edu.cn/">Huazhong University of Science and Technology <strong><span id="total_cit">(HUST)</span></strong></a> and visting PhD at <a href="https://www.hust.edu.cn/">University of California, Santa Barbara <strong><span id="total_cit">(UCSB)</span></strong></a>, cooperated with Prof.<a href="https://sites.cs.ucsb.edu/~william/">William Wang</a>.  I am currently interning at the Foundation Model Group of  <a href="https://www.stepfun.com/chats/new">StepFun AI</a>, where I work with Prof. <a href="https://scholar.google.com.hk/citations?user=yuB-cfoAAAAJ&amp;hl=en">Xiangyu Zhang</a> and Dr. <a href="https://joker316701882.github.io/">Zheng Ge</a>.

My research interest includes (1) Perception, Understanding and Reasoning with Multimodal LLMs, and (2) Spatial Intelligence of Visual and Multimodal Foundation Models. I have published several papers <a href="https://scholar.google.com/citations?user=rWCQMNgAAAAJ&amp;hl=en"></a> at the top-level international AI conferences including ICLR, CVPR, ECCV, AAAI, ICML, etc. My next goal is to further build powerful multimodal foundation models and develop multimodal agents based on the foundation model to deal with complex real-world tasks, e.g., navigation and UI-assistant.

🎺🎺 <strong>I&rsquo; am set to graduate with my Ph.D. in June 2026 and am currently on the lookout for postdoctoral positions. If you are interested, please feel free to reach out to me via email !</strong>


# 🔥 News
- *2025.04*: &nbsp;🎉🎉 We present <a href="https://arxiv.org/pdf/2504.07954">Perception-R1</a>. This work takes a pioneering step in exploring the potential of rule-based RL in MLLM post-training for perception policy learning.

- *2025.02*: &nbsp;🎉🎉 Glad to announce that we have two papers, <a href="https://ahnsun.github.io/UTR/">Video-UTR</a> and <a href="https://arxiv.org/pdf/2503.10616">OVTR</a>, accepted for poster presentations at ICLR 2025! Let's see and have a chat in Singapore!

- *2024.11*: &nbsp;🎉🎉 We present <a href="https://arxiv.org/pdf/2503.10616">OVTR</a>, the first fully end-to-end open-vocabulary multiple objects tracking framework.

- *2024.11*: &nbsp;🎉🎉 We present <a href="https://ahnsun.github.io/UTR/">Video-UTR</a>, investigating the shortcut learning in video multimodal large language models and systemally establish temporal hacking theory.

- *2024.07*: &nbsp;🎉🎉 Really excited to head to UCSB for a year-long PhD visiting in Prof. William Wang's NLP lab. Looking forward to boosting my research ability. Catch you all in California!

- *2024.06*: &nbsp;🍾🍺 Excited to share that our work, <a href="https://eccv.ecva.net/virtual/2024/poster/1827">Merlin</a>, has been accepted as a poster presentation at ECCV 2024! See you in Milan!

- *2024.02*: &nbsp;🎉🎉 Glad to announce that our work, <a href="https://www.ijcai.org/proceedings/2024/0193.pdf">ChatSpot</a>, has been accepted for a Long Oral presentation at IJCAI 2024! See you in Jeju!

- *2023.12*: &nbsp;🎉🎉 We present <a href='https://ahnsun.github.io/merlin/'>Merlin</a>, the first end-to-end multimodal large language model that supports video-level visual localization (including tracking, video recognition, video registration, etc.) and future reasoning.

- *2023.07*: &nbsp;🎉🎉 We present <a href='https://chatspot.streamlit.app/'>ChatSpot</a>, a unified end-to-end multimodal large language model that supports diverse forms of interactivity including mouse clicks, drag-and-drop, and drawing boxes, which provides a more flexible and seamless interactive experience.

- *2023.05*: &nbsp;🎉🎉 We present <a href='https://chatspot.streamlit.app/'>MOTRv3</a>, a fully end-to-end multiple object tracking model that achieves SOTA performance on DanceTrack, which outperforms the tracking-by-detection trackers for the first time.

# 📝 Highlight Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeuraIPS2025 Submission</div><img src='images/pr1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Perception-R1: Pioneering Perception Policy with Reinforcement Learning](https://arxiv.org/pdf/2504.07954.pdf)

**En Yu**, Kangheng Lin, Liang Zhao, Jisheng Yin, Yana Wei, Yuang Peng, Haoran Wei, Jianjian Sun, Chunrui Han, Zheng Ge, Xiangyu Zhang, Daxin Jiang, Jingyu Wang, Wenbing Tao

[**Project**](https://github.com/linkangheng/PR1)
- Perception-R1 pioneers the exploration of RL's potential in MLLM post-training for perception policy learning. We get valuable cognition through experiments. It sets new SoTAs in visual perception tasks, especially object detection. Its novel paradigm enables it to match and surpass expert models, showing the great potential of perception policy learning.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR2025 Poster</div><img src='images/utr.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Unhackable Temporal Rewarding for Scalable Video MLLMs](https://arxiv.org/pdf/2312.00589.pdf)

**En Yu**, Kangheng Lin, Liang Zhao, Yana Wei, Zining Zhu, Haoran Wei, Jianjian Sun, Zheng Ge, Xiangyu Zhang, Jingyu Wang, Wenbing Tao

[**Project**](https://ahnsun.github.io/UTR/)
- This work investigates the shortcut learning in video multimodal large language models and systemally establish temporal hacking theory including: 
  (1) Systematic exploration of the video MLLM unscaling phenomenon, establishing temporal hacking theory from a novel RL perspective. 
  (2) Design of Temporal Perplexity (TPL) score, providing a reliable reference metric for mitigating temporal hacking. 
  (3) Proposing two principles to guide the design of proxy rewards for video-language modeling and further propose Unhackable Temporal Rewarding (UTR).
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR2025 Poster</div><img src='images/ovtr.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[OVTR: End-to-End Open-Vocabulary Multiple Object Tracking with Transformer](https://arxiv.org/pdf/2312.00589.pdf)

Jinyang Li, **En Yu**, Sijia Chen, Wenbing Tao

[**Project**](https://github.com/jinyanglii/OVTR)
- OVTR serves as the first fully end-to-end open-vocabulary multiple-object tracking framework.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV2024 Poster</div><img src='images/merlin.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Merlin: Empowering Multimodal LLMs with Foresight Minds](https://arxiv.org/pdf/2312.00589.pdf)

**En Yu**, Liang Zhao, Yana Wei, Jinrong Yang, Dongming Wu, Lingyu Kong, Haoran Wei, Tiancai Wang, Zheng Ge, Xiangyu Zhang, Wenbing Tao

[**Project**](https://ahnsun.github.io/merlin/)
- Merlin is a groundbreaking model capable of generating natural language responses that are intricately linked with object trajectories. Merlin excels in predicting and reasoning about future events based on initial observations, showcasing an unprecedented capability in future prediction and reasoning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI2024 Long Oral</div><img src='images/chatspot.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ChatSpot: Bootstrapping Multimodal LLMs via Precise Referring Instruction Tuning](https://arxiv.org/pdf/2307.09474.pdf)

Liang Zhao<sup>\*</sup>, **En Yu<sup>\*</sup>**, Zheng Ge, Jinrong Yang, Haoran Wei, Hongyu Zhou, Jianjian Sun, Yuang Peng, Runpei Dong, Chunrui Han, Xiangyu Zhang

[**Project**](https://chatspot.streamlit.app/)
- ChatSpot is a a unified end-toend multimodal large language model that supports diverse forms of interactivity including mouse clicks, drag-and-drop, and drawing boxes, which provides a more flexible and seamless interactive experience.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCV Submission</div><img src='images/motrv3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MOTRv3: Release-Fetch Supervision for End-to-End Multi-Object Tracking](https://arxiv.org/pdf/2305.14298.pdf)

**En Yu**, Tiancai Wang, Zhuoling Li, Yuang Zhang, Xiangyu Zhang, Wenbing Tao

[**Project**]()
- MOTRv3 is a fully end-to-end multiple object tracking (MOT) model that outperforms existing SOTA tracking-by-detection methods without any assistance of an extra detection network or post-processing.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">RA-L</div><img src='images/grouplane.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GroupLane: End-to-End 3D Lane Detection with Channel-wise Grouping](https://arxiv.org/pdf/2307.09472.pdf)

Zhuoling Li, Chunrui Han, Zheng Ge, Jinrong Yang, **En Yu**, Haoqian Wang, Hengshuang Zhao, Xiangyu Zhang

[**Project**]()
- GroupLane is the first fully-convoluition end-to-end 3D lane detection network. GroupLane achieves SOTA performance on existing mainstream lane detection benchmark, i.e., OpenLane, Once-3DLanes, and OpenLane-Huawei while also ensuring fast inference speed (7 x faster than PersFormer).
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IROS2024 Poster</div><img src='images/qtrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Quality Matters: Embracing Quality Clues for Robust 3D Multi-Object Tracking](https://arxiv.org/pdf/2208.10976.pdf)

Jinrong Yang<sup>\*</sup>, **En Yu<sup>\*</sup>**, Zeming Li, Xiaoping Li, Wenbing Tao

[**Project**]()
- QTrack achieves 51.1%, 54.8% and 56.6% AMOTA tracking performance on the nuScenes test sets with BEVDepth, VideoBEV, and StreamPETR models, respectively, which significantly reduces the performance gap between pure camera and LiDAR-based trackers.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI2023 Poster</div><img src='images/ltrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Generalizing multiple object tracking to unseen domains by introducing natural language representation](https://ojs.aaai.org/index.php/AAAI/article/view/25437)

**En Yu**, Songtao Liu, Zhuoling Li, Jinrong Yang, Zeming Li, Shoudong Han, Wenbing Tao

[**Project**]()
- We introudce LTrack, the first multiple-object tracking model supporting vision-language modality inputs. Thanks to the dimain invariant of natural language representation, LTrack achieves SOTA performance on our established cross-domain MOT benchmark.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR2022 Poster</div><img src='images/mtrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Discriminative Representation: Multi-view Trajectory Contrastive Learning for Online Multi-object Tracking](https://openaccess.thecvf.com/content/CVPR2022/papers/Yu_Towards_Discriminative_Representation_Multi-View_Trajectory_Contrastive_Learning_for_Online_Multi-Object_CVPR_2022_paper.pdf)

**En Yu**, Zhuoling Li, Shoudong Han

[**Project**]()
- We propose MTrack that adopts multi-view trajectory contrastive learning, in which each trajectory is represented as a center vector. By maintaining all the vectors in a dynamically updated memory bank, a trajectory-level contrastive loss is devised to explore the inter-frame information in the whole trajectories. MTrack surpassed preceding trackers and established new SOTA performance. 
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMM</div><img src='images/relationtrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Relationtrack: Relation-aware multiple object tracking with decoupled representation](https://arxiv.org/pdf/2105.04322.pdf)

**En Yu**, Zhuoling Li, Shoudong Han, Hongwei Wang

</div>
</div>

- [Perception in Reflection](https://arxiv.org/pdf/2504.07165?), Yana Wei, Liang Zhao, Kangheng Lin, **En Yu**, Yuang Peng, Runpei Dong, Jianjian Sun, Haoran Wei, Zheng Ge, Xiangyu Zhang, Vishal M Patel, **ICML2025 Poster**

- [Rulearena: A benchmark for rule-guided reasoning with llms in real-world scenarios](https://arxiv.org/pdf/2412.08972), Ruiwen Zhou, Wenyue Hua, Liangming Pan, Sitao Cheng, Xiaobao Wu, **En Yu**, William Yang Wang, **ICLR2025 Workshop**

- [Cross-View Referring Multi-Object Tracking](https://ojs.aaai.org/index.php/AAAI/article/view/32219), Sijia Chen, En Yu, Wenbing Tao, **AAAI2024 Poster**

- [Delving into the Trajectory Long-tail Distribution for Muti-object Tracking](https://openaccess.thecvf.com/content/CVPR2024/papers/Chen_Delving_into_the_Trajectory_Long-tail_Distribution_for_Muti-object_Tracking_CVPR_2024_paper.pdf), Sijia Chen, En Yu, Jinyang Li, Wenbing Tao, **CVPR2024 Poster**

- [MAT: Motion-aware Multi-Object Tracking](https://arxiv.org/pdf/2009.04794.pdf), Shoudong Han, Piao Huang, Hongwei Wang, **En Yu**, Donghaisheng Liu, Xiaofeng Pan, **Neurocomputing**

- [Implicit and Efficient Point Cloud Completion for 3D Single Object Tracking](https://arxiv.org/pdf/2209.00522.pdf), Pan Wang, Liangliang Ren, Shengkai Wu, Jinrong Yang, **En Yu**, Hangcheng Yu, Xiaoping Li, **IEEE Robotics and Automation Letters**

- [Efficient few-shot classification via contrastive pre-training on web data](https://ieeexplore.ieee.org/abstract/document/9763033), Zhuoling Li, Haohan Wang, Tymosteusz Swistek, **En Yu**, Haoqian Wang, **IEEE Transactions on Artificial Intelligence**

# 🎖 Honors and Awards
- *2022.05* Second Prize in the First Global Artificial Intelligence Technology Innovation Competition. 
- *2019.08* First Prize in the 13th National College Students' Intelligent Car Competition.
- *2018.08* National Champion in the 14th National College Students' Intelligent Car Competition.

# 📖 Educations
- *2024.07 - 2025.05 (now)*, University of California, Santa Barbara (UCSB), USA.
- *2022.06 - 2025.05 (now)*, Huazhong University of Science and Technology, China.
- *2020.09 - 2022.06*, Huazhong University of Science and Technology, Whhan, China. 
- *2016.09 - 2020.06*, Huazhong University of Science and Technology, Wuhan, China. 

# 💻 Internships
- *2022.03 - 2024.03*, [MEGVII Research](https://en.megvii.com/), Foundation Model Group. 
- *2024.03 - 2025.05 (now)*, [StepFun AI](https://en.megvii.com/), Multimodal Intelligence Group. 