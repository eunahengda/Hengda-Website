// Central content source for H&D Hengda Industries Sdn Bhd website.
// Editing copy, services, industries, or contact details starts here.
// Fields ending in _zh hold the Simplified Chinese translation used when
// the visitor switches the site language (see lib/i18n.tsx).

export const company = {
  legalName: "H&D Hengda Industries Sdn Bhd",
  shortName: "H&D Hengda",
  tagline: "Precision Machining & Metal Fabrication",
  founded: 2004, // 20+ years of operation
  yearsExperience: 20,
  address: {
    line1: "65, Jalan Kempas 2/1,",
    line2: "Kawasan Perindustrian Tanah Tampoi,",
    line3: "81200 Johor Bahru, Johor Darul Ta'zim, Malaysia",
    full: "65, Jalan Kempas 2/1, Kawasan Perindustrian Tanah Tampoi, 81200 Johor Bahru, Johor Darul Ta'zim, Malaysia",
  },
  phone: "016-716 1990",
  phoneHref: "tel:+60167161990",
  whatsapp: "60167161990",
  whatsappHref:
    "https://wa.me/60167161990?text=Hi%20H%26D%20Hengda%2C%20I%27d%20like%20to%20request%20a%20quotation.",
  email: "hengdarepair@gmail.com",
  emailHref: "mailto:hengdarepair@gmail.com",
  mapEmbedSrc:
    "https://www.google.com/maps?q=65+Jalan+Kempas+2%2F1+Kawasan+Perindustrian+Tanah+Tampoi+81200+Johor+Bahru&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=65+Jalan+Kempas+2%2F1+Kawasan+Perindustrian+Tanah+Tampoi+81200+Johor+Bahru",
  // Once you claim your Google Business Profile, replace this with the
  // direct "write a review" link Google gives you (Business Profile ->
  // Ask for reviews -> Copy link) so visitors land straight on the review box.
  googleReviewLink:
    "https://www.google.com/maps/search/?api=1&query=65+Jalan+Kempas+2%2F1+Kawasan+Perindustrian+Tanah+Tampoi+81200+Johor+Bahru",
  hours: [
    { day: "Monday – Friday", day_zh: "星期一至星期五", time: "8:00 AM – 5:30 PM", time_zh: "上午 8:00 – 下午 5:30" },
    { day: "Saturday, Sunday & Public Holidays", day_zh: "星期六、星期日及公共假期", time: "Closed", time_zh: "休息" },
  ],
  social: {
    facebook: "https://www.facebook.com/share/196DsmgRGr/",
    whatsapp: "https://wa.me/60167161990",
    email: "mailto:hengdarepair@gmail.com",
  },
  // Contact form submissions: see components/ContactForm.tsx for how to
  // wire this to Formspree (or similar) so enquiries email you directly.
  formspreeEndpoint: "",
};

export const nav = [
  { label: "Home", label_zh: "首页", href: "/" },
  { label: "About Us", label_zh: "关于我们", href: "/about" },
  { label: "Services", label_zh: "服务项目", href: "/services" },
  { label: "Industries Served", label_zh: "服务行业", href: "/industries" },
  { label: "Gallery", label_zh: "作品图库", href: "/gallery" },
  { label: "Contact", label_zh: "联系我们", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  title_zh: string;
  icon: string; // lucide-react icon name
  summary: string;
  summary_zh: string;
  description: string;
  description_zh: string;
  points: string[];
  points_zh: string[];
};

export const services: Service[] = [
  {
    slug: "conventional-lathe",
    title: "Conventional Lathe Turning",
    title_zh: "传统车床车削",
    icon: "CircleDot",
    summary:
      "Precision turning of shafts, bushings, and cylindrical components to tight tolerances.",
    summary_zh: "精密车削轴类、轴套及圆柱形零件，公差控制严格。",
    description:
      "Our conventional lathe stations handle turning, facing, boring, threading, and knurling for shafts, bushings, sleeves, and cylindrical components in mild steel, stainless steel, brass, and aluminium. Every piece is checked against your drawing before it leaves the shop floor.",
    description_zh:
      "我们的传统车床工位可处理车削、端面加工、镗孔、车牙及滚花等工序，适用于低碳钢、不锈钢、黄铜及铝制的轴类、轴套及圆柱形零件。每件成品出厂前都会依照图纸检测。",
    points: [
      "External and internal turning up to large diameters",
      "Precision threading (metric and imperial)",
      "Facing, boring, and taper turning",
      "Single-piece prototypes to production batches",
    ],
    points_zh: [
      "可加工大直径的外圆及内孔车削",
      "精密车牙（公制与英制）",
      "端面、镗孔与锥度车削",
      "支持单件打样至批量生产",
    ],
  },
  {
    slug: "milling",
    title: "Milling",
    title_zh: "铣削",
    icon: "LayoutGrid",
    summary:
      "Flat surfaces, slots, pockets, and profiles machined to drawing specification.",
    summary_zh: "依照图纸规格加工平面、槽孔、凹槽及各种轮廓。",
    description:
      "Conventional milling for flat surfaces, slots, pockets, contours, and drilled patterns on machine bases, brackets, jigs, and fixtures. We work directly from technical drawings or physical samples supplied by your engineering team.",
    description_zh:
      "传统铣床加工机座、支架、治具及夹具的平面、槽孔、凹槽、轮廓及钻孔图案。我们可直接依照技术图纸或贵公司工程团队提供的实物样品施工。",
    points: [
      "Face milling and slot milling",
      "Drilling, tapping, and boring on the same setup",
      "Jig and fixture fabrication",
      "Sample-based reverse engineering",
    ],
    points_zh: [
      "平面铣削与槽孔铣削",
      "同一次装夹完成钻孔、攻牙与镗孔",
      "治具与夹具制作",
      "依样品逆向工程制作",
    ],
  },
  {
    slug: "keyway-milling",
    title: "Keyway Milling",
    title_zh: "键槽铣削",
    icon: "Ruler",
    summary:
      "Accurate keyways cut into shafts and hubs for a snug, vibration-free fit.",
    summary_zh: "精准加工轴类及轮毂键槽，确保紧密贴合、运转无震动。",
    description:
      "Keyway milling for shafts, couplings, gears, and pulley hubs, cut to match standard or custom key sizes so that rotating assemblies transmit torque cleanly without play or premature wear.",
    description_zh:
      "为轴类、联轴器、齿轮及皮带轮毂加工键槽，可依照标准或客制尺寸切削，确保旋转组件传动扭矩顺畅，不产生晃动或提前磨损。",
    points: [
      "Parallel and woodruff keyways",
      "Internal keyways for hubs and gears",
      "Matched fits for couplings and pulleys",
      "Rework on worn or damaged keyways",
    ],
    points_zh: [
      "平行键槽与半月键槽",
      "轮毂及齿轮内键槽加工",
      "联轴器与皮带轮的精准配合",
      "磨损或损坏键槽的修复",
    ],
  },
  {
    slug: "welding",
    title: "Welding",
    title_zh: "焊接",
    icon: "Flame",
    summary:
      "Structural and fabrication welding in mild steel and stainless steel.",
    summary_zh: "低碳钢与不锈钢的结构及制造焊接。",
    description:
      "Arc and MIG welding for structural frames, tanks, machine bases, guarding, piping, and repair work. Joints are prepared, welded, and ground to a clean finish suitable for both structural and cosmetic applications.",
    description_zh:
      "电弧焊与 MIG 焊接，适用于结构框架、储罐、机座、护罩、管道及维修工程。焊缝经过预处理、焊接与打磨，呈现干净的表面，兼顾结构强度与外观要求。",
    points: [
      "MIG and arc welding, mild steel and stainless steel",
      "Structural frames, platforms, and machine bases",
      "Pipe and tank fabrication and repair",
      "Grinding and finishing to a clean weld line",
    ],
    points_zh: [
      "MIG 与电弧焊接，适用低碳钢及不锈钢",
      "结构框架、平台与机座制作",
      "管道与储罐制造及维修",
      "打磨与表面处理，焊缝整洁",
    ],
  },
  {
    slug: "shaping",
    title: "Shaping",
    title_zh: "牛头刨床加工",
    icon: "Layers",
    summary:
      "Shaping machine work for keyways, slots, and flat internal surfaces.",
    summary_zh: "使用牛头刨床加工键槽、沟槽及内部平面。",
    description:
      "Shaping operations for internal keyways, slots, and flat surfaces that are difficult to reach with a mill, particularly on legacy machine parts and one-off replacement components.",
    description_zh:
      "针对铣床难以加工的内部键槽、沟槽及平面进行牛头刨床加工，特别适用于旧型机械零件及单件替换零件。",
    points: [
      "Internal and external slotting",
      "Flat surface generation",
      "Replacement parts for older machinery",
      "Low-volume and single-piece work",
    ],
    points_zh: [
      "内部及外部沟槽加工",
      "平面加工",
      "旧型机械替换零件",
      "小批量及单件加工",
    ],
  },
  {
    slug: "custom-metal-fabrication",
    title: "Custom Metal Fabrication",
    title_zh: "定制金属制造",
    icon: "Hammer",
    summary:
      "Cutting, bending, and assembly of custom brackets, frames, and enclosures.",
    summary_zh: "定制支架、框架及外壳的切割、弯折与组装。",
    description:
      "From a hand sketch, sample part, or CAD drawing, we cut, bend, drill, and weld custom brackets, frames, guards, trolleys, and enclosures in mild steel, stainless steel, and aluminium.",
    description_zh:
      "无论是手绘草图、实物样品或 CAD 图纸，我们都能为您切割、弯折、钻孔及焊接定制支架、框架、护罩、推车及外壳，材质涵盖低碳钢、不锈钢及铝材。",
    points: [
      "Sheet metal cutting and bending",
      "Custom brackets, frames, and trolleys",
      "Machine guarding and enclosures",
      "Built to drawing or physical sample",
    ],
    points_zh: [
      "钣金切割与弯折",
      "定制支架、框架与推车",
      "机械护罩与外壳制作",
      "依图纸或实物样品制作",
    ],
  },
  {
    slug: "engineering-parts-manufacturing",
    title: "Engineering Parts Manufacturing",
    title_zh: "工程零件制造",
    icon: "Cog",
    summary:
      "Spare and replacement parts manufactured to match original specifications.",
    summary_zh: "依原厂规格制造备用及替换零件。",
    description:
      "When an original spare part is discontinued, delayed, or too costly to import, we manufacture a replacement to the original dimensions and tolerances, keeping your line running without waiting on overseas suppliers.",
    description_zh:
      "当原厂零件停产、交货延迟或进口成本过高时，我们能依照原始尺寸与公差制造替代零件，让您的生产线无需苦等海外供应商即可持续运转。",
    points: [
      "Obsolete and hard-to-source spare parts",
      "Reverse engineering from a worn sample",
      "Batch production for maintenance stock",
      "Material matched to original application",
    ],
    points_zh: [
      "停产或难以采购的备用零件",
      "依磨损样品逆向工程制造",
      "批量生产维护备件",
      "材质与原厂应用相符",
    ],
  },
  {
    slug: "repair-modification",
    title: "Repair & Modification",
    title_zh: "维修与改装",
    icon: "Wrench",
    summary:
      "Restoring worn components and modifying equipment for a new purpose.",
    summary_zh: "修复磨损零件，并为设备进行改装以适应新用途。",
    description:
      "We recondition worn shafts, housings, and mechanical assemblies, and modify existing equipment to suit a new process, layout, or product line — extending the working life of machinery your plant already owns.",
    description_zh:
      "我们提供轴类、外壳及机械组件的翻新服务，并可依照新工艺、新布局或新产品线改装现有设备——延长贵厂现有机械的使用寿命。",
    points: [
      "Shaft and housing reconditioning",
      "Machine modification for new processes",
      "On-site assessment for larger equipment",
      "Emergency breakdown turnaround",
    ],
    points_zh: [
      "轴类及外壳翻新",
      "为新工艺改装机械",
      "大型设备现场评估",
      "紧急故障快速处理",
    ],
  },
];

export type Industry = {
  slug: string;
  title: string;
  title_zh: string;
  icon: string;
  description: string;
  description_zh: string;
  /**
   * Optional featured image URL. Only ever set for Sanity-sourced
   * industries (see sanity/lib/getIndustries.ts) — the 6 entries below
   * intentionally leave this unset, so their cards keep rendering exactly
   * as before this field was added.
   */
  imageUrl?: string;
};

export const industries: Industry[] = [
  {
    slug: "palm-oil-agro",
    title: "Palm Oil & Agro-Processing",
    title_zh: "油棕及农产品加工业",
    icon: "Leaf",
    description:
      "Machined shafts, bushings, and structural parts for milling, pressing, and conveyor equipment used across Johor's palm oil and agro-processing plants.",
    description_zh:
      "为柔佛各油棕厂与农产品加工厂的压榨、研磨及输送设备提供车削轴类、轴套及结构零件。",
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage Processing",
    title_zh: "食品饮料加工业",
    icon: "UtensilsCrossed",
    description:
      "Precision-machined components and fast turnaround repairs for processing and packing lines, keeping food production equipment running to schedule.",
    description_zh:
      "为食品饮料加工与包装生产线提供精密加工零件及快速维修服务，确保生产设备准时运作。",
  },
  {
    slug: "consumer-goods-packaging",
    title: "Consumer Goods & Packaging",
    title_zh: "消费品与包装制造业",
    icon: "PackageCheck",
    description:
      "Machined parts and structural fabrication for extrusion, moulding, and packaging equipment used across plastics, packaging, and consumer goods manufacturers.",
    description_zh:
      "为塑料、包装及消费品制造商的挤出、成型及包装设备提供加工零件及结构制造服务。",
  },
  {
    slug: "oil-gas-marine",
    title: "Oil & Gas / Marine (Rigs & Tankers)",
    title_zh: "石油天然气与海事业（钻油台及油船）",
    icon: "Ship",
    description:
      "Structural fabrication, machined components, and repair support for rigs, tankers, and marine and offshore equipment operating out of Johor's oil & gas and marine hubs.",
    description_zh:
      "为柔佛石油天然气及海事枢纽的钻油台、油船及海事设备提供结构制造、机械加工零件及维修支持。",
  },
  {
    slug: "industrial-electronics",
    title: "Industrial & Electronics Manufacturing",
    title_zh: "工业与电子产品制造业",
    icon: "Settings2",
    description:
      "Custom machining and engineering parts for manufacturers who need precision components and mechanical support for their own production equipment.",
    description_zh:
      "为需要精密零件及生产设备机械支持的工业与电子产品制造商，提供定制加工与工程零件服务。",
  },
  {
    slug: "logistics-terminal",
    title: "Logistics, Port & Container Terminal",
    title_zh: "物流、港口与货柜码头业",
    icon: "Warehouse",
    description:
      "Structural fabrication and mechanical repair for handling equipment and infrastructure used in port, container terminal, and logistics operations.",
    description_zh:
      "为港口、货柜码头及物流作业中的搬运设备与基础设施提供结构制造及机械维修服务。",
  },
];

export const whyChooseUs = [
  {
    icon: "History",
    title: "20+ Years in the Trade",
    title_zh: "20 多年行业经验",
    description:
      "Two decades of machining and fabrication work across Johor's manufacturing sector, with the shop-floor experience to match.",
    description_zh: "二十年来在柔佛制造业深耕机械加工与金属制造，累积丰富的车间实战经验。",
  },
  {
    icon: "Timer",
    title: "Fast Turnaround",
    title_zh: "快速交货",
    description:
      "Breakdowns don't wait, and neither do we. Urgent repair and replacement parts are prioritised to get your line running again.",
    description_zh: "设备故障不等人，我们也一样。紧急维修与替换零件优先处理，尽快让您的生产线恢复运作。",
  },
  {
    icon: "Target",
    title: "Tight Tolerances",
    title_zh: "严格公差控制",
    description:
      "Every part is measured against your drawing or sample before it ships, not after a complaint comes in.",
    description_zh: "每件零件出货前都会依照图纸或样品检测，而不是等到客户投诉才处理。",
  },
  {
    icon: "Wallet",
    title: "Transparent Pricing",
    title_zh: "透明报价",
    description:
      "Quotations are itemised and explained before work begins, so there are no surprises on the invoice.",
    description_zh: "开工前提供详细报价并说明清楚，账单上不会有任何意外费用。",
  },
  {
    icon: "Users",
    title: "Trusted by Manufacturers",
    title_zh: "深受制造商信赖",
    description:
      "Long-standing relationships with manufacturers across palm oil, food, packaging, oil & gas, and industrial sectors across Malaysia.",
    description_zh: "与马来西亚油棕、食品、包装、石油天然气及工业领域的制造商建立长期合作关系。",
  },
  {
    icon: "ShieldCheck",
    title: "Built to Last",
    title_zh: "经久耐用",
    description:
      "Parts and repairs are built for continuous industrial use, not just to pass a first inspection.",
    description_zh: "零件与维修工程均以长期工业使用为标准打造，而不只是通过初次检验。",
  },
];

export const machineCapabilities = [
  { label: "Max Turning Length", label_zh: "最大车削长度", value: "1,500", unit: "mm" },
  { label: "Max Turning Diameter", label_zh: "最大车削直径", value: "400", unit: "mm" },
  { label: "Milling Table Travel", label_zh: "铣床工作台行程", value: "1,000", unit: "mm" },
  { label: "Tolerance Achievable", label_zh: "可达公差", value: "±0.02", unit: "mm" },
];

export type GalleryItem = {
  title: string;
  title_zh: string;
  industrySlug: string; // ties to `industries` above, used for the gallery filter
  image: string;
};

// Each project photo is tagged with the industry it was made for, so a
// visitor from (say) the packaging sector can filter the gallery down to
// parts made for packaging clients specifically. Photos are free-license
// Unsplash placeholders for now — see README for how to swap in real photos
// of finished parts per industry (this is the single highest-impact photo
// swap for building visitor confidence).
export const galleryItems: GalleryItem[] = [
  {
    title: "Conveyor Shaft for Palm Oil Mill",
    title_zh: "油棕厂输送带轴",
    industrySlug: "palm-oil-agro",
    image:
      "https://images.unsplash.com/photo-1776090188130-26c7253ff423?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Reconditioned Press Bushing",
    title_zh: "翻新压榨机轴套",
    industrySlug: "palm-oil-agro",
    image:
      "https://images.unsplash.com/photo-1701448150058-43d6d199b103?auto=format&fit=crop&w=1200&q=80&crop=entropy",
  },
  {
    title: "Food Processing Line Shaft",
    title_zh: "食品加工线轴类零件",
    industrySlug: "food-beverage",
    image:
      "https://images.unsplash.com/photo-1701448150058-43d6d199b103?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Beverage Filling Machine Bracket",
    title_zh: "饮料灌装机支架",
    industrySlug: "food-beverage",
    image:
      "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?auto=format&fit=crop&w=1200&q=80&crop=entropy",
  },
  {
    title: "Packaging Machine Gear Component",
    title_zh: "包装机齿轮零件",
    industrySlug: "consumer-goods-packaging",
    image:
      "https://images.unsplash.com/photo-1701448150058-43d6d199b103?auto=format&fit=crop&w=1200&q=80&crop=entropy&sat=-10",
  },
  {
    title: "Custom Bracket for Packing Line",
    title_zh: "包装线定制支架",
    industrySlug: "consumer-goods-packaging",
    image:
      "https://images.unsplash.com/photo-1776090188130-26c7253ff423?auto=format&fit=crop&w=1200&q=80&crop=entropy",
  },
  {
    title: "Structural Bracket for Marine Equipment",
    title_zh: "海事设备结构支架",
    industrySlug: "oil-gas-marine",
    image:
      "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Welded Frame for Offshore Support Structure",
    title_zh: "海上支撑结构焊接框架",
    industrySlug: "oil-gas-marine",
    image:
      "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?auto=format&fit=crop&w=1200&q=80&crop=entropy&sat=-10",
  },
  {
    title: "Precision Machined Housing",
    title_zh: "精密加工外壳",
    industrySlug: "industrial-electronics",
    image:
      "https://images.unsplash.com/photo-1701448150058-43d6d199b103?auto=format&fit=crop&w=1200&q=80&crop=entropy&sat=-20",
  },
  {
    title: "Custom Jig for Production Line",
    title_zh: "生产线定制治具",
    industrySlug: "industrial-electronics",
    image:
      "https://images.unsplash.com/photo-1776090188130-26c7253ff423?auto=format&fit=crop&w=1200&q=80&sat=-10",
  },
  {
    title: "Container Handling Equipment Part",
    title_zh: "货柜搬运设备零件",
    industrySlug: "logistics-terminal",
    image:
      "https://images.unsplash.com/photo-1776090188130-26c7253ff423?auto=format&fit=crop&w=1200&q=80&crop=entropy&sat=-20",
  },
  {
    title: "Structural Repair for Port Equipment",
    title_zh: "港口设备结构维修",
    industrySlug: "logistics-terminal",
    image:
      "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?auto=format&fit=crop&w=1200&q=80&crop=entropy&sat=-20",
  },
];

// "Repaired Products" gallery — a rotating showcase of before/after repair
// work. Add new entries here (see README for how to add your own photos).
export const repairGalleryItems = [
  {
    title: "Reconditioned Gearbox Housing",
    title_zh: "翻新齿轮箱外壳",
    note: "Worn housing reconditioned and returned to service.",
    note_zh: "磨损外壳经翻新后重新投入使用。",
    image:
      "https://images.unsplash.com/photo-1701448150058-43d6d199b103?auto=format&fit=crop&w=1200&q=80&crop=entropy&sat=-20",
  },
  {
    title: "Repaired Conveyor Shaft",
    title_zh: "输送带轴修复",
    note: "Shaft resurfaced and keyway rework completed on-site.",
    note_zh: "现场完成轴表面修复与键槽重新加工。",
    image:
      "https://images.unsplash.com/photo-1776090188130-26c7253ff423?auto=format&fit=crop&w=1200&q=80&crop=entropy&sat=-20",
  },
];

export const contactSubjects = [
  { en: "Ask For Quotation", zh: "询问报价" },
  { en: "Product Inquiry", zh: "产品咨询" },
  { en: "Collaboration Opportunities", zh: "合作机会" },
  { en: "Feedback and Complaints", zh: "反馈与投诉" },
  { en: "Other Inquiries", zh: "其他咨询" },
];
