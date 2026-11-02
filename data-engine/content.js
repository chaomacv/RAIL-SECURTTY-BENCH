/* Bilingual examples and workflow explanations. */
window.RAILMIND_CONTENT = {
  "assets": {
    "background": "assets/noise-barrier-background.webp",
    "reference": "assets/noise-barrier-reference.webp",
    "direct": "assets/noise-barrier-direct.webp",
    "refined": "assets/noise-barrier-refined.webp",
    "guided": "assets/noise-barrier-guided.webp",
    "supervision": "assets/supervision-scenes.webp"
  },
  "strategies": [
    {
      "asset": "direct",
      "zh": {
        "caption": "背景图 + 简单需求 → 生成图像",
        "prompt": "让图中的部分铁路声屏障立柱呈现锈蚀。",
        "tags": [
          "目标类别",
          "简单需求"
        ],
        "description": "以声屏障立柱锈蚀为例，用简单需求建立初始样例，观察模型如何理解锈蚀的位置、范围与外观。",
        "scene": "锈蚀是否出现在声屏障立柱上？分布是否符合构件的形状与连接位置？",
        "fidelity": "锈色、纹理与边缘是否自然？是否出现突兀的团块、变形或不合理的锈迹扩散？",
        "compliance": "修改对象是否为立柱？是否保留面板、轨道和背景？锈蚀范围是否符合需求？",
        "transition": "如何进一步限定锈蚀的位置、分布、材质和背景保持要求？",
        "next": "加入精细化约束"
      },
      "en": {
        "caption": "Background + simple request → generated image",
        "prompt": "Make some railway noise-barrier posts in this image appear corroded.",
        "tags": [
          "Target category",
          "Simple request"
        ],
        "description": "Use noise-barrier post corrosion as a baseline example. Inspect how a simple request controls the location, extent and appearance of rust.",
        "scene": "Does corrosion occur on the noise-barrier posts? Does its distribution follow the component shape and connection points?",
        "fidelity": "Are rust colors, textures and edges natural? Check for bulky artifacts, deformation or implausible rust spreading.",
        "compliance": "Are the edited components posts? Are panels, tracks and the background preserved? Does the rust extent match the request?",
        "transition": "How can the prompt better specify rust location, distribution, material appearance and background preservation?",
        "next": "Add detailed constraints"
      }
    },
    {
      "asset": "refined",
      "zh": {
        "caption": "背景图 + 多维文本约束 → 生成图像",
        "prompt": "在上下两排声屏障中各选择一根现有立柱，生成局部表面锈蚀。\n位置与范围：锈蚀沿立柱底部及边缘自然分布，不改变构件轮廓。\n材质与细节：呈现不规则的红褐色锈斑、局部涂层剥落及少量向下延伸的锈迹，避免夸张的块状堆积。\n光照与透视：匹配原图的视角、光照方向、清晰度和金属表面质感。\n背景保持：仅修改所选立柱及紧邻的少量锈迹区域，保留其余立柱、面板、轨道、植被与线缆。",
        "tags": [
          "位置与范围",
          "材质与细节",
          "光照与透视",
          "背景保持"
        ],
        "description": "将立柱锈蚀拆解为位置、范围、材质、光照和背景保持等约束，逐项检查精细化文本的控制效果。",
        "scene": "锈斑是否沿立柱表面、边缘和底部合理分布？与构件连接关系是否协调？",
        "fidelity": "锈蚀纹理、涂层边界和流挂锈迹是否自然？是否保留立柱原有形状与金属质感？",
        "compliance": "逐项核对所选立柱、锈蚀范围、材质细节及背景保持，检查是否改动无关区域。",
        "transition": "如果文字仍难以指定真实锈斑的形态与纹理，可以增加什么视觉依据？",
        "next": "加入目标视觉参考"
      },
      "en": {
        "caption": "Background + multidimensional constraints → generated image",
        "prompt": "Select one existing post in each of the upper and lower rows of noise barriers and add localized surface corrosion.\nLocation and extent: distribute rust naturally along the post bases and edges without changing component outlines.\nMaterial and detail: show irregular reddish-brown rust patches, local coating loss and limited downward rust streaks. Avoid exaggerated bulky deposits.\nLighting and perspective: match the original viewpoint, lighting direction, sharpness and metal surface appearance.\nBackground preservation: edit only the selected posts and small adjacent rust-streak regions. Preserve all other posts, panels, tracks, vegetation and wires.",
        "tags": [
          "Location & extent",
          "Material & detail",
          "Light & perspective",
          "Preserve background"
        ],
        "description": "Specify corrosion through location, extent, material, lighting and preservation constraints. Review how well detailed text controls each aspect.",
        "scene": "Does rust follow plausible areas on the post surfaces, edges and bases? Is it consistent with component connections?",
        "fidelity": "Are rust texture, coating boundaries and downward streaks natural? Are the original post geometry and metal appearance preserved?",
        "compliance": "Check the selected posts, rust extent, material detail and background preservation individually. Look for changes in unrelated regions.",
        "transition": "What visual evidence could help specify realistic rust shapes and textures that remain difficult to describe?",
        "next": "Add a visual reference"
      }
    },
    {
      "asset": "guided",
      "zh": {
        "caption": "背景图 + 目标参考 + 文本指导 → 生成图像",
        "prompt": "以背景图为编辑底图，参考目标图中声屏障立柱的锈斑形态、红褐色纹理和涂层剥落细节。\n在上排声屏障中选择两根现有立柱，将同类锈蚀特征自然融入其表面与边缘。\n根据背景调整锈斑尺度、分布、光照与清晰度；不要复制参考图的背景或整体结构。\n保留其余立柱、下排声屏障、轨道、植被和线缆，并核验锈蚀外观与参考的一致性。",
        "tags": [
          "锈蚀外观参考",
          "局部细节",
          "场景融合",
          "参考一致性"
        ],
        "description": "加入真实声屏障立柱锈蚀参考图，为锈斑形态、材质与涂层细节提供视觉依据，同时检查与原始场景的融合。",
        "scene": "参考中的锈蚀特征是否适用于背景立柱？生成后是否保持合理的构件形状与空间关系？",
        "fidelity": "锈色、斑块分布和涂层剥落是否与参考相符？是否引入参考图的无关背景或结构？",
        "compliance": "核验锈蚀外观的参考一致性、指定立柱及背景保持要求，记录需要修订或筛除的结果。",
        "transition": "图像通过复核后，如何转化为可用于训练的文本监督？",
        "next": "进入文本监督流程"
      },
      "en": {
        "caption": "Background + target reference + prompt → generated image",
        "prompt": "Use the background image as the editing canvas. Follow the rust patch shapes, reddish-brown texture and coating-loss details on the noise-barrier posts in the target reference.\nSelect two existing posts in the upper row and integrate similar corrosion naturally into their surfaces and edges.\nAdapt rust scale, distribution, lighting and sharpness to the background. Do not copy the reference background or overall structure.\nPreserve all other posts, the lower noise barrier, tracks, vegetation and wires. Inspect the corrosion appearance against the reference.",
        "tags": [
          "Corrosion reference",
          "Local detail",
          "Scene integration",
          "Reference consistency"
        ],
        "description": "Add a real reference of corroded noise-barrier posts to guide rust shape, material and coating detail, while checking integration with the original scene.",
        "scene": "Are the reference corrosion features appropriate for the background posts? Are component geometry and spatial relationships preserved?",
        "fidelity": "Do rust colors, patch distribution and coating loss follow the reference? Check for unwanted reference background or structural changes.",
        "compliance": "Review reference consistency, the specified posts and background preservation. Flag results requiring correction or rejection.",
        "transition": "Once the images pass review, how can they become training-ready textual supervision?",
        "next": "Explore textual supervision"
      }
    }
  ],
  "steps": [
    {
      "zh": {
        "label": "图像整理",
        "title": "整理场景与正负样本",
        "description": "按铁路场景整理真实图像与已复核的生成图像，保留来源、样本划分与正负样本信息。",
        "purpose": "先建立清晰的数据来源与样本边界。"
      },
      "en": {
        "label": "Curation",
        "title": "Curate scenes and samples",
        "description": "Organize real images and reviewed synthetic images by railway scene. Preserve provenance, dataset splits and positive or negative sample information.",
        "purpose": "Establish provenance and clear sample boundaries."
      }
    },
    {
      "zh": {
        "label": "提示词组装",
        "title": "用领域知识约束任务",
        "description": "组合专家角色、领域知识、任务导向的思维链、结构化输出与少量示例，约束并规划教师模型的分析过程。",
        "purpose": "点击下方提示词要素，查看各自的作用。"
      },
      "en": {
        "label": "Prompt",
        "title": "Ground the task in domain knowledge",
        "description": "Combine an expert role, domain knowledge, a task-specific reasoning plan, an output schema and few-shot examples to guide and structure the teacher model’s analysis.",
        "purpose": "Select a prompt component to inspect its role."
      }
    },
    {
      "zh": {
        "label": "模型分析",
        "title": "通用 MLLM 读取图像",
        "description": "面向批量文本监督生成，按场景组织知识、规划提示词，并通过统一封装调用通用 MLLM。",
        "purpose": "统一请求组织与记录，为后续结构化处理和审查提供依据。"
      },
      "en": {
        "label": "Teacher",
        "title": "Analyze images with a general MLLM",
        "description": "For batch textual supervision, organize scene knowledge, plan prompts and call general-purpose MLLMs through consistent request packaging.",
        "purpose": "Consistent requests and records support downstream structuring and review."
      }
    },
    {
      "zh": {
        "label": "结构化监督",
        "title": "将描述组织成结构化信息",
        "description": "把场景、缺陷类别、可见证据和风险说明分开组织，便于检查一致性与构造不同监督任务。",
        "purpose": "案例示意：字段分别描述信息，并保持彼此一致。"
      },
      "en": {
        "label": "Structure",
        "title": "Organize structured supervision",
        "description": "Separate scene, defect categories, visible evidence and risk descriptions for consistency checks and multiple supervision tasks.",
        "purpose": "Illustrative example: separate fields while keeping their meanings aligned."
      }
    },
    {
      "zh": {
        "label": "审查复核",
        "title": "用多种方式交叉检查监督",
        "description": "结合分层抽样、人工／LLM 复核和分字段相似度匹配，检查类别、图像证据与风险说明的一致性。",
        "purpose": "需要修订的记录经更正与再次审查后，才能进入导出。"
      },
      "en": {
        "label": "Review",
        "title": "Cross-check supervision in several ways",
        "description": "Combine stratified sampling, human/LLM review and field-wise similarity matching to check categories, visual evidence and risk statements.",
        "purpose": "Records requiring correction must be revised and reviewed again before export."
      }
    },
    {
      "zh": {
        "label": "任务导出",
        "title": "构造多任务文本监督",
        "description": "使用复核后的记录组织场景识别、缺陷判断、证据描述与风险说明等任务，保留样本与来源的关联。",
        "purpose": "向下查看不同任务的问答模板。"
      },
      "en": {
        "label": "Export",
        "title": "Build supervision for multiple tasks",
        "description": "Use approved records for scene recognition, defect decisions, evidence descriptions and risk explanations, while retaining sample provenance.",
        "purpose": "Explore task-specific question-and-answer templates below."
      }
    }
  ],
  "promptParts": [
    {
      "zh": {
        "label": "专家角色",
        "text": "专家角色用于明确模型职责与分析视角，使输出聚焦铁路巡检需求。将模型设定为铁路基础设施巡检分析助手，围绕图像中的可见信息开展分析。"
      },
      "en": {
        "label": "Expert role",
        "text": "An expert role defines the model’s responsibilities and perspective, keeping responses focused on railway inspection. Assign the role of a railway infrastructure inspection assistant analyzing visible image evidence."
      }
    },
    {
      "zh": {
        "label": "领域知识",
        "text": "领域知识用于统一术语与缺陷分类边界，减少场景理解和类别判断的偏差。提供铁路场景、相关构件及预定义缺陷类别的定义，作为分析依据。"
      },
      "en": {
        "label": "Domain knowledge",
        "text": "Domain knowledge aligns terminology and defect boundaries to reduce errors in scene interpretation and classification. Provide definitions of railway scenes, relevant components and predefined defect categories as the basis for analysis."
      }
    },
    {
      "zh": {
        "label": "思维链构建",
        "text": "思维链构建用于按任务规划分析路径，发挥模型的场景理解与风险分析能力，并引导其形成符合需求、可核查的结论。\n1. 全局到局部解析：描述图像场景，识别其中的物体，并分析各物体的状态。\n2. 安全推理：结合可见缺陷与场景条件，评估可能涉及的安全风险。\n3. 缺陷类别对齐：将识别到的异常与预定义的 13 类缺陷进行匹配和归类。\n4. 严重程度评估：分析潜在危险的严重程度，判断人工维护或干预需求。"
      },
      "en": {
        "label": "Chain-of-thought design",
        "text": "A task-specific reasoning plan guides the model’s scene understanding and risk analysis toward relevant, verifiable conclusions.\n1. Global-to-local parsing: describe the scene, identify objects and characterize their states.\n2. Safety reasoning: assess possible safety risks using visible defects and scene conditions.\n3. Defect category alignment: match and classify identified anomalies against the 13 predefined defect categories.\n4. Severity assessment: assess the severity of potential hazards and the need for human maintenance or intervention."
      }
    },
    {
      "zh": {
        "label": "输出格式",
        "text": "输出格式用于约束回答结构，便于复核、筛选和后续监督任务构建。指定 scene、anomaly_classes、visual_evidence、risk_description 和 review_status 等结构化字段。"
      },
      "en": {
        "label": "Output schema",
        "text": "An output schema keeps responses structured for review, filtering and supervision tasks. Specify fields such as scene, anomaly_classes, visual_evidence, risk_description and review_status."
      }
    },
    {
      "zh": {
        "label": "Few-shot",
        "text": "Few-shot 通过典型案例统一分析逻辑、缺陷分类边界与输出规范，提高结果的准确性、一致性和可控性。提供经过复核的输入与输出示例，统一信息粒度和不确定性表达。"
      },
      "en": {
        "label": "Few-shot",
        "text": "Few-shot examples align analysis logic, defect boundaries and output conventions to improve accuracy, consistency and control. Provide reviewed input-output examples to align the level of detail and expressions of uncertainty."
      }
    }
  ],
  "tasks": [
    {
      "zh": {
        "label": "场景识别",
        "question": "这张图像属于哪类铁路巡检场景？",
        "answer": "{经过复核的场景类别}"
      },
      "en": {
        "label": "Scene",
        "question": "Which railway inspection scene is shown in this image?",
        "answer": "{reviewed scene category}"
      }
    },
    {
      "zh": {
        "label": "缺陷判断",
        "question": "图像中是否存在缺陷？如果存在，属于哪些类别？",
        "answer": "{缺陷存在性}；{经过复核的缺陷类别列表}"
      },
      "en": {
        "label": "Defect",
        "question": "Does this image contain defects? If so, which categories?",
        "answer": "{defect presence}; {reviewed defect categories}"
      }
    },
    {
      "zh": {
        "label": "证据描述",
        "question": "哪些可见信息支持这一缺陷判断？",
        "answer": "{对象或构件}；{可见状态}；{支持判断的图像证据}"
      },
      "en": {
        "label": "Evidence",
        "question": "Which visible details support the defect decision?",
        "answer": "{object or component}; {visible state}; {supporting visual evidence}"
      }
    },
    {
      "zh": {
        "label": "风险说明",
        "question": "该缺陷可能涉及哪些风险？哪些信息仍需人工确认？",
        "answer": "{有依据的风险说明}；{适用条件与不确定性}"
      },
      "en": {
        "label": "Risk",
        "question": "What risks may be associated with the defect, and what needs further review?",
        "answer": "{grounded risk description}; {conditions and uncertainty}"
      }
    }
  ],
  "curationNote": {
    "zh": "在 SFT 训练中，含缺陷样本帮助模型学习缺陷特征与正确输出；无缺陷样本帮助模型识别正常状态与非目标特征，减少误判和无效响应。二者结合有助于模型学习判别边界，提升区分能力、鲁棒性与泛化能力。",
    "en": "In SFT, defect-containing samples teach defect features and correct responses, while defect-free samples teach normal states and non-target features, reducing false alarms and irrelevant responses. Together they help the model learn decision boundaries and improve discrimination, robustness and generalization."
  },
  "modelAnalysis": {
    "zh": {
      "intro": "批量调用 API 生产文本监督时，更需要有组织的提示词、有规划的领域知识注入和清晰的请求封装。按场景选择知识与任务模板，将图像、分析步骤及输出规范组合为一致的请求。",
      "route": [
        "场景知识",
        "提示词模板",
        "API 请求"
      ],
      "note": "记录请求编号、模型与知识／模板版本，便于追踪、重试和后续审查。"
    },
    "en": {
      "intro": "Large-scale API generation requires organized prompts, planned domain-knowledge injection and clearly packaged requests. Select knowledge and task templates by scene, then combine images, analysis steps and output requirements into consistent requests.",
      "route": [
        "Scene knowledge",
        "Prompt template",
        "API request"
      ],
      "note": "Track request IDs, models and knowledge/template versions for traceability, retries and later review."
    }
  },
  "structuredExamples": {
    "zh": {
      "note": "案例示意 · 用于说明字段组织方式",
      "items": [
        [
          "场景信息",
          "铁路声屏障；关注立柱、面板及连接部位。"
        ],
        [
          "缺陷类别",
          "立柱锈蚀；与预定义缺陷类别进行对齐。"
        ],
        [
          "可见证据",
          "多根立柱表面可见红褐色不规则斑块，部分区域伴随涂层破损。"
        ],
        [
          "风险说明",
          "持续腐蚀可能影响构件耐久性；严重程度与维护需求需结合现场检查确认。"
        ]
      ]
    },
    "en": {
      "note": "Illustrative example · Demonstrates field organization",
      "items": [
        [
          "Scene context",
          "Railway noise barrier; inspect posts, panels and connections."
        ],
        [
          "Defect category",
          "Post corrosion, aligned with the predefined defect taxonomy."
        ],
        [
          "Visible evidence",
          "Irregular reddish-brown patches on several posts, with local coating damage."
        ],
        [
          "Risk description",
          "Continued corrosion may affect durability; severity and maintenance needs require on-site confirmation."
        ]
      ]
    }
  },
  "reviewMethods": {
    "zh": {
      "items": [
        [
          "分层抽样",
          "按场景、缺陷类别与异常程度抽取样本，同时覆盖含缺陷与无缺陷样本。"
        ],
        [
          "人工复核／LLM 复核",
          "人工核对图像与描述；LLM 可辅助检查类别、格式、语义矛盾与风险表述。"
        ]
      ],
      "label": "分字段相似度审查",
      "fields": [
        "场景",
        "缺陷类别",
        "可见证据",
        "风险说明"
      ],
      "route": "分别向量化 → 与同类样本或领域知识匹配 → 标记语义偏离与冲突 → 复核或修订",
      "note": "相似度用于辅助筛查；结论仍需与图像证据一致。"
    },
    "en": {
      "items": [
        [
          "Stratified sampling",
          "Sample by scene, defect category and anomaly severity, covering both defect-containing and defect-free images."
        ],
        [
          "Human / LLM review",
          "Humans check images against descriptions. LLMs can assist with category, format, semantic consistency and risk-language checks."
        ]
      ],
      "label": "Field-wise similarity review",
      "fields": [
        "Scene",
        "Defect category",
        "Visible evidence",
        "Risk"
      ],
      "route": "Embed each field → Match related samples or domain knowledge → Flag semantic deviations and conflicts → Review or revise",
      "note": "Similarity supports screening; conclusions must remain consistent with visual evidence."
    }
  },
  "workflowPanels": [
    {
      "zh": {
        "title": "场景整理的作用",
        "kicker": "SCENE-AWARE CURATION",
        "intro": "场景决定了需要关注的构件、缺陷语义与分析重点。先分组，再选择相应知识与提示词。",
        "items": [
          [
            "为什么按场景整理",
            "声屏障关注立柱与面板，接触网支柱关注支撑结构与附着物；相同外观在不同场景中的含义可能不同。"
          ],
          [
            "提示词随场景调整",
            "按场景指定观察对象、空间关系和任务目标，让模型关注与当前任务相关的信息。"
          ],
          [
            "注入对应领域知识",
            "匹配构件定义、缺陷分类边界及风险条件，避免把不同场景的判断依据混用。"
          ],
          [
            "保留样本边界",
            "关联场景、正负样本、来源与数据划分，便于采样、复核及后续训练。"
          ]
        ],
        "note": "整理后的场景标签用于知识选择、提示词组装与分层审查。"
      },
      "en": {
        "title": "Why organize scenes?",
        "kicker": "SCENE-AWARE CURATION",
        "intro": "Scenes determine relevant components, defect semantics and analysis priorities. Group images before selecting knowledge and prompts.",
        "items": [
          [
            "Scene-specific meaning",
            "Noise barriers emphasize posts and panels; catenary poles emphasize supports and attachments. Similar appearances may mean different things across scenes."
          ],
          [
            "Adapt the prompt",
            "Specify relevant objects, spatial relationships and task goals for each scene."
          ],
          [
            "Select domain knowledge",
            "Match component definitions, category boundaries and risk conditions to the scene."
          ],
          [
            "Preserve sample context",
            "Retain scene, positive/negative status, provenance and data splits for sampling, review and training."
          ]
        ],
        "note": "Scene labels guide knowledge selection, prompt assembly and stratified review."
      }
    },
    {
      "zh": {
        "title": "提示词结构",
        "kicker": "PROMPT STRUCTURE",
        "intro": "用五层结构明确铁路巡检模型的角色、知识、分析路径和输出规范。",
        "items": [
          [
            "01 / 专家角色",
            "铁路基础设施巡检分析助手：明确职责、分析视角和证据要求。"
          ],
          [
            "02 / 领域知识",
            "提供六类场景、13 类缺陷及当前场景相关构件的定义。"
          ],
          [
            "03 / 思维链构建",
            "全局到局部解析 → 安全推理 → 缺陷类别对齐 → 严重程度评估。"
          ],
          [
            "04 / 结构化输出",
            "按场景、类别、可见证据与风险等字段组织可核查的分析摘要。"
          ],
          [
            "05 / Few-shot",
            "提供经过复核的正常与缺陷案例，统一类别边界和输出规范。"
          ]
        ],
        "note": "左侧选择不同要素，可查看其作用与具体组织方式。"
      },
      "en": {
        "title": "Prompt structure",
        "kicker": "PROMPT STRUCTURE",
        "intro": "A five-layer prompt framework adapted to railway inspection tasks.",
        "items": [
          [
            "01 / Expert role",
            "A railway inspection assistant with clear responsibilities, perspective and evidence requirements."
          ],
          [
            "02 / Domain knowledge",
            "Define the six scenes, 13 defect categories and components relevant to the current scene."
          ],
          [
            "03 / Reasoning plan",
            "Global-to-local parsing → Safety reasoning → Category alignment → Severity assessment."
          ],
          [
            "04 / Structured output",
            "Organize a verifiable summary into scene, category, visible evidence and risk fields."
          ],
          [
            "05 / Few-shot",
            "Use reviewed normal and defect examples to align category boundaries and output conventions."
          ]
        ],
        "note": "Select a prompt component to explore its purpose and construction."
      }
    },
    {
      "zh": {
        "title": "批量生产的请求封装",
        "kicker": "BATCH API WORKFLOW",
        "intro": "统一输入组织，才能让大规模监督生成保持一致、可追踪并便于审查。",
        "items": [
          [
            "知识选择",
            "根据场景和任务检索相关构件、缺陷定义及风险条件，注入本次请求。"
          ],
          [
            "模板组装",
            "组合角色、知识、分析路径、输出格式与示例，明确各部分的边界。"
          ],
          [
            "API 调用",
            "封装图像与提示词；统一调度、限流和失败重试，保留请求与响应的关联。"
          ],
          [
            "输出接收",
            "检查格式、记录来源及版本，将待修订结果送入后续审查。"
          ]
        ],
        "note": "这里展示方法与组织方式，不在网页中实际调用模型 API。"
      },
      "en": {
        "title": "Package batch requests",
        "kicker": "BATCH API WORKFLOW",
        "intro": "Consistent input organization makes large-scale supervision generation traceable and easier to review.",
        "items": [
          [
            "Select knowledge",
            "Retrieve scene- and task-relevant components, defect definitions and risk conditions."
          ],
          [
            "Assemble the template",
            "Combine role, knowledge, reasoning plan, output format and examples with clear boundaries."
          ],
          [
            "Call the API",
            "Package images and prompts; coordinate scheduling, rate limits and retries while linking requests to responses."
          ],
          [
            "Receive outputs",
            "Validate format, retain provenance and versions, and route records needing correction to review."
          ]
        ],
        "note": "This page explains the workflow; it does not call model APIs."
      }
    },
    {
      "zh": {
        "title": "让字段相互对应",
        "kicker": "ALIGNED SUPERVISION",
        "intro": "以声屏障立柱锈蚀为例，将场景、类别、证据与风险建立清晰联系。",
        "items": [
          [
            "场景 → 分析对象",
            "声屏障场景对应立柱、面板与连接部位，确定观察范围。"
          ],
          [
            "缺陷 → 可见证据",
            "立柱锈蚀应由红褐色锈斑、涂层破损等图像线索支撑。"
          ],
          [
            "证据 → 风险说明",
            "从可见状态出发描述可能影响，区分图像事实与条件性的风险判断。"
          ],
          [
            "形成统一记录",
            "保留字段之间的关联，便于一致性检查、复核及多任务监督构造。"
          ]
        ],
        "note": "示例用于解释组织方式，不代表真实模型的输出或已完成的安全评估。"
      },
      "en": {
        "title": "Keep fields aligned",
        "kicker": "ALIGNED SUPERVISION",
        "intro": "Noise-barrier post corrosion illustrates the links among scene, category, evidence and risk.",
        "items": [
          [
            "Scene → Objects",
            "The noise-barrier scene determines the posts, panels and connections to inspect."
          ],
          [
            "Defect → Evidence",
            "A corrosion label needs support from visible rust patches, coating damage or related cues."
          ],
          [
            "Evidence → Risk",
            "Describe possible effects from visible states, separating observations from conditional risk judgments."
          ],
          [
            "One linked record",
            "Preserve field relationships for consistency checks, review and multi-task supervision."
          ]
        ],
        "note": "The example illustrates organization; it is not actual model output or a completed safety assessment."
      }
    },
    {
      "zh": {
        "title": "多方式交叉审查",
        "kicker": "REVIEW STRATEGY",
        "intro": "将抽样、人工／LLM 复核和向量相似度匹配结合，检查监督的证据一致性。",
        "items": [
          [
            "抽样覆盖",
            "按场景与缺陷类别分层，关注少见样本、异常分布和易混淆案例。"
          ],
          [
            "人工／LLM 复核",
            "人工核验图像依据，LLM 辅助检查结构、类别与语义一致性。"
          ],
          [
            "四类字段分别向量化",
            "分别表示场景、缺陷类别、可见证据和风险，与同类样本或知识库做相似度匹配。"
          ],
          [
            "标记 → 修订 → 再审",
            "低相似、冲突或证据不足的记录进入复核与更正，核验通过后再导出。"
          ]
        ],
        "note": "相似度是筛查信号，不能单独作为缺陷或风险判断的依据。"
      },
      "en": {
        "title": "Cross-check supervision",
        "kicker": "REVIEW STRATEGY",
        "intro": "Combine sampling, human/LLM review and vector similarity to check evidence consistency.",
        "items": [
          [
            "Sample for coverage",
            "Stratify by scene and category, emphasizing rare samples, unusual distributions and ambiguous cases."
          ],
          [
            "Human / LLM review",
            "Humans verify visual evidence; LLMs assist with structure, category and semantic consistency."
          ],
          [
            "Embed four fields separately",
            "Embed scene, category, visible evidence and risk, then match related samples or domain knowledge."
          ],
          [
            "Flag → Revise → Review",
            "Route low-similarity, conflicting or unsupported records for correction and re-review before export."
          ]
        ],
        "note": "Similarity is a screening signal, not standalone evidence of a defect or risk."
      }
    }
  ]
};

