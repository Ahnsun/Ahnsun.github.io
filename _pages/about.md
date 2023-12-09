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

Hi, I am <strong>En Yu</strong> (于恩 in Chinese), a PhD student at <a href='https://www.hust.edu.cn/'>Huazhong University of Science and Technology <strong><span id='total_cit'>(HUST)</span></strong></a>. I am currently interning at the Foundation Model Group of  <a href='https://en.megvii.com/'>Megvii Reasearch</a> (Face++), where I work with Prof. <a href='https://scholar.google.com.hk/citations?user=yuB-cfoAAAAJ&hl=en'>Xiangyu Zhang</a> and Dr. <a href='https://joker316701882.github.io/'>Zheng Ge</a>. 

My research interest focuses on Computer Vision (CV) and Multi/Cross-Model Modeling, specifically inclduing 2D/3D Object Detection/Tracking, Video Understanding and Generation, and Multi-modal Large Languge Model (MLLM). I have published several papers <a href="https://scholar.google.com/citations?user=rWCQMNgAAAAJ&hl=en"><img src="https://img.shields.io/badge/Citations-240-blue.svg?logo=google-scholar&amp;labelColor=f6f6f6&amp;color=9cf&amp;style=flat&amp;label=citations"></a> at the top international AI conferences such as CVPR and AAAI. My next goal is to develop Multi-modal Foundation Models for the long-range video understanding and generation and then build embodied robots based on the foundation model to effectively learn from the world knowledge and interact with hummans.

🎺🎺 <strong>I&rsquo; am preparing to go on a one-year overseas exchange visit and I’m currently looking forward to opportunities of PhD exchange visit for 2024 Summer.</strong> 


# 🔥 News
- *2023.12*: &nbsp;🎉🎉 We present <a href='https://ahnsun.github.io/merlin/'>Merlin</a>, the first end-to-end multimodal large language model that supports video-level visual localization (including tracking, video recognition, video registration, etc.) and future reasoning.
- *2023.07*: &nbsp;🎉🎉 We present <a href='https://chatspot.streamlit.app/'>ChatSpot</a>, a unified end-to-end multimodal large language model that supports diverse forms of interactivity including mouse clicks, drag-and-drop, and drawing boxes, which provides a more flexible and seamless interactive experience.

- *2023.05*: &nbsp;🎉🎉 We present <a href='https://chatspot.streamlit.app/'>MOTRv3</a>, a fully end-to-end multiple object tracking model that achieves SOTA performance on DanceTrack, which outperforms the tracking-by-detection trackers for the first time.

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024 on Submit</div><img src='images/merlin.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Merlin: Empowering Multimodal LLMs with Foresight Minds](https://arxiv.org/pdf/2312.00589.pdf)

**En Yu**, Liang Zhao, Yana Wei, Jinrong Yang, Dongming Wu, Lingyu Kong, Haoran Wei, Tiancai Wang, Zheng Ge, Xiangyu Zhang, Wenbing Tao

[**Project**](https://ahnsun.github.io/merlin/)
- Merlin is a groundbreaking model capable of generating natural language responses that are intricately linked with object trajectories. Merlin excels in predicting and reasoning about future events based on initial observations, showcasing an unprecedented capability in future prediction and reasoning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Tech Report</div><img src='images/chatspot.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ChatSpot: Bootstrapping Multimodal LLMs via Precise Referring Instruction Tuning](https://arxiv.org/pdf/2307.09474.pdf)

Liang Zhao<sup>\*</sup>, **En Yu<sup>\*</sup>**, Zheng Ge, Jinrong Yang, Haoran Wei, Hongyu Zhou, Jianjian Sun, Yuang Peng, Runpei Dong, Chunrui Han, Xiangyu Zhang

[**Project**](https://chatspot.streamlit.app/)
- ChatSpot is a a unified end-toend multimodal large language model that supports diverse forms of interactivity including mouse clicks, drag-and-drop, and drawing boxes, which provides a more flexible and seamless interactive experience.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024 on Submit</div><img src='images/motrv3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MOTRv3: Release-Fetch Supervision for End-to-End Multi-Object Tracking](https://arxiv.org/pdf/2305.14298.pdf)

**En Yu**, Tiancai Wang, Zhuoling Li, Yuang Zhang, Xiangyu Zhang, Wenbing Tao

[**Project**]()
- MOTRv3 is a fully end-to-end multiple object tracking (MOT) model that outperforms existing SOTA tracking-by-detection methods without any assistance of an extra detection network or post-processing.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2024 on Submit</div><img src='images/grouplane.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GroupLane: End-to-End 3D Lane Detection with Channel-wise Grouping](https://arxiv.org/pdf/2307.09472.pdf)

Zhuoling Li, Chunrui Han, Zheng Ge, Jinrong Yang, **En Yu**, Haoqian Wang, Hengshuang Zhao, Xiangyu Zhang

[**Project**]()
- GroupLane is the first fully-convoluition end-to-end 3D lane detection network. GroupLane achieves SOTA performance on existing mainstream lane detection benchmark, i.e., OpenLane, Once-3DLanes, and OpenLane-Huawei while also ensuring fast inference speed (7 x faster than PersFormer).
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">R-AL on Submit</div><img src='images/qtrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Quality Matters: Embracing Quality Clues for Robust 3D Multi-Object Tracking](https://arxiv.org/pdf/2208.10976.pdf)

Jinrong Yang<sup>\*</sup>, **En Yu<sup>\*</sup>**, Zeming Li, Xiaoping Li, Wenbing Tao

[**Project**]()
- QTrack achieves 51.1%, 54.8% and 56.6% AMOTA tracking performance on the nuScenes test sets with BEVDepth, VideoBEV, and StreamPETR models, respectively, which significantly reduces the performance gap between pure camera and LiDAR-based trackers.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI2023</div><img src='images/ltrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Generalizing multiple object tracking to unseen domains by introducing natural language representation](https://ojs.aaai.org/index.php/AAAI/article/view/25437)

**En Yu**, Songtao Liu, Zhuoling Li, Jinrong Yang, Zeming Li, Shoudong Han, Wenbing Tao

[**Project**]()
- We introudce LTrack, the first multiple-object tracking model supporting vision-language modality inputs. Thanks to the dimain invariant of natural language representation, LTrack achieves SOTA performance on our established cross-domain MOT benchmark.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR2022</div><img src='images/mtrack.png' alt="sym" width="100%"></div></div>
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



- [MAT: Motion-aware Multi-Object Tracking](https://arxiv.org/pdf/2009.04794.pdf), Shoudong Han, Piao Huang, Hongwei Wang, **En Yu**, Donghaisheng Liu, Xiaofeng Pan, **Neurocomputing**

- [Implicit and Efficient Point Cloud Completion for 3D Single Object Tracking](https://arxiv.org/pdf/2209.00522.pdf), Pan Wang, Liangliang Ren, Shengkai Wu, Jinrong Yang, **En Yu**, Hangcheng Yu, Xiaoping Li, **IEEE Robotics and Automation Letters**

- [Efficient few-shot classification via contrastive pre-training on web data](https://ieeexplore.ieee.org/abstract/document/9763033), Zhuoling Li, Haohan Wang, Tymosteusz Swistek, **En Yu**, Haoqian Wang, **IEEE Transactions on Artificial Intelligence**

# 🎖 Honors and Awards
- *2022.05* Second Prize in the First Global Artificial Intelligence Technology Innovation Competition. 
- *2019.08* First Prize in the 13th National College Students' Intelligent Car Competition.
- *2018.08* National Champion in the 14th National College Students' Intelligent Car Competition.

# 📖 Educations
- *2022.06 - 2023.12 (now)*, Huazhong University of Science and Technology, China.
- *2020.09 - 2022.06*, Huazhong University of Science and Technology, Whhan, China. 
- *2016.09 - 2020.06*, Huazhong University of Science and Technology, Wuhan, China. 

# 💻 Internships
- *2022.03 - 2023.12 (now)*, [MEGVII Research](https://en.megvii.com/), Foundation Model Group. 