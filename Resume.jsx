import React from "react";

export default function Resume() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8">
        <h1 className="text-3xl font-bold mb-2 text-center">孙小棠 Xiaotang Sun</h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div>
            <div className="text-base">📱 +86 15150533593</div>
            <div className="text-base">✉️ 976649530@qq.com</div>
            <div className="text-base">✉️ S18642674396@gmail.com</div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">个人简介 / Profile</h2>
          <p>
            供应链分析师，拥有3年世界500强企业经验，擅长利用量化建模和系统集成提升预测准确性、库存周转与计划协同效率。精通SQL、Power BI、Python，熟悉MRP计划、SKU策略、产能评估与调拨优化。曾独立开发预测与短缺预警系统，推动供应链弹性和决策能力提升。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">工作经历 / Professional Experience</h2>
          <div className="mb-4">
            <div className="font-bold">Microsoft (China) Co., Ltd. | 数据中心供应链专员</div>
            <div className="text-sm text-gray-500 mb-1">2024.10 – 2025.05</div>
            <ul className="list-disc ml-6">
              <li>主导区域数据中心的物料滚动计划与交付节奏，库存周转周期同比优化12%。</li>
              <li>协同多部门设定SKU优先级与交付窗口，高优先级SKU按时交付率97%。</li>
              <li>优化MRP主数据100+项，数据准确率提升至95%以上，降低库存积压风险。</li>
              <li>搭建SQL+DAX物料短缺预警模型，识别风险SKU超20项，平均预警提前7天。</li>
              <li>上线Power BI短缺看板，实现计划响应速度提升30%。</li>
              <li>推动产能调拨与替代策略，3大项目部署周期缩短5%。</li>
              <li>跨CMDB、ERP与MES系统对账，提升物料追踪与审计通过率。</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-bold">Amazon (China) Holding Co., Ltd. | 供应链数据运营专员</div>
            <div className="text-sm text-gray-500 mb-1">2022.08 – 2024.10</div>
            <ul className="list-disc ml-6">
              <li>负责80+跨境热销SKU订货与调拨，库存周转提升15%，断货率下降20%。</li>
              <li>搭建补货模拟平台，实现库存覆盖天数稳定在18~22天。</li>
              <li>推动新品差异化补货，10+新品首发无断供。</li>
              <li>监控预测偏差和SKU波动，输出S&OP会议数据洞察报告。</li>
              <li>开发清关文档自动化工具，通关效率提升50%，高峰期成功率99%。</li>
              <li>建立供应链KPI监控体系，提升各部门协作效率。</li>
              <li>跨团队异常预警机制，异常解决时效提升30%。</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-bold">Bayer (China) Co., Ltd. | HR数据分析实习生</div>
            <div className="text-sm text-gray-500 mb-1">2022.03 – 2022.06</div>
            <ul className="list-disc ml-6">
              <li>支持搭建500+岗位配置数据分析模型，节省预算10%。</li>
              <li>开发HR可视化报表模板，报告出具效率提升30%。</li>
              <li>参与SAP与Workday集成测试，系统上线后故障率低于2%。</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">教育背景 / Education</h2>
          <div className="mb-2">
            <div className="font-bold">昆士兰大学（QS排名47）</div>
            <div className="text-sm">商业智能分析硕士 2020.07 – 2022.07</div>
            <div className="text-gray-500 text-xs">主修：SQL、敏捷开发、ETL、Power BI/Tableau、数据建模、供应链预测</div>
          </div>
          <div className="mb-2">
            <div className="font-bold">沈阳师范大学 & Fort Hays 州立大学</div>
            <div className="text-sm">金融与国际贸易学士 2014.09 – 2018.07</div>
            <div className="text-gray-500 text-xs">主修：计量经济学、宏观/微观经济学、企业财务、会计、国际贸易实务</div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">技能与证书 / Skills & Certifications</h2>
          <ul className="list-disc ml-6">
            <li>数据分析：SQL（中高级）、Python（Pandas）、Power BI（含DAX）、Excel（VBA）、Tableau（基础）</li>
            <li>供应链计划：库存仿真、MRP计划、SKU预警、产能分析、预测偏差评估、数据仓库建模</li>
            <li>系统经验：SAP ERP（PP模块）、Workday、Octoparse、CMDB</li>
            <li>语言与证书：中英文流利，雅思7分，微软认证数据分析师PL-300，ITIL 4</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">项目与成果 / Projects & Achievements</h2>
          <ul className="list-disc ml-6">
            <li>搭建断货预警系统，准确率95%以上，响应周期缩短30%，季度支持20+SKU风险管理。</li>
            <li>开发补货模拟平台，断货率下降15%，库存覆盖天数提升20%。</li>
            <li>设计预测偏差与计划报告模板，S&OP会议频率提升至双周，计划准确率提升12%。</li>
            <li>上线自动化清关数据系统，校对效率提升50%，通关成功率99%。</li>
          </ul>
        </section>
      </div>
    </div>
  );
}