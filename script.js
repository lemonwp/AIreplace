document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resultSection = document.getElementById('result-section');
    
    // 计算结果函数
    calculateBtn.addEventListener('click', function() {
        // 获取所有评分值
        const taskRepetition = parseInt(document.querySelector('input[name="task-repetition"]:checked').value);
        const decisionComplexity = parseInt(document.querySelector('input[name="decision-complexity"]:checked').value);
        const creativityRequirement = parseInt(document.querySelector('input[name="creativity-requirement"]:checked').value);
        const interpersonalInteraction = parseInt(document.querySelector('input[name="interpersonal-interaction"]:checked').value);
        const professionalBarrier = parseInt(document.querySelector('input[name="professional-barrier"]:checked').value);
        
        // 计算总分
        const totalScore = (6 - taskRepetition) + decisionComplexity + creativityRequirement + interpersonalInteraction + professionalBarrier;
        
        // 判定风险等级
        let riskLevel, recommendation;
        
        if (totalScore <= 8) {
            riskLevel = '高风险区';
            recommendation = '您的工作处于高风险区，替代率可能超过60%。建议：\n1. 积极学习AI工具，将其作为工作辅助\n2. 发展创造性和人际交互能力\n3. 考虑转向需要更高决策复杂度的岗位\n4. 持续提升专业技能，建立个人品牌\n5. 探索跨领域合作机会，拓展技能边界';
        } else if (totalScore >= 9 && totalScore <= 12) {
            riskLevel = '中风险区';
            recommendation = '您的工作处于中风险区，部分任务可能被自动化。建议：\n1. 主动拥抱AI，学习如何与AI协作\n2. 专注发展AI难以替代的技能，如创造性思维和深度人际互动\n3. 提升决策复杂度，承担更多战略层面的工作\n4. 建立专业网络，增强人际影响力\n5. 持续学习，保持行业洞察力';
        } else {
            riskLevel = '安全区';
            recommendation = '您的工作处于安全区，AI更多作为增效工具。建议：\n1. 积极利用AI工具提升工作效率\n2. 专注于AI难以复制的核心能力\n3. 发展领导力和团队管理能力\n4. 持续深化专业知识，建立行业权威\n5. 探索如何将AI整合到工作流程中，创造新价值';
        }
        
        // 更新结果展示
        document.getElementById('total-score-value').textContent = totalScore;
        document.getElementById('risk-level-value').textContent = riskLevel;
        document.getElementById('recommendation-content').textContent = recommendation;
        
        // 更新风险指示器样式
        const riskIndicator = document.getElementById('risk-indicator');
        riskIndicator.className = 'risk-indicator';
        
        if (totalScore <= 8) {
            riskIndicator.classList.add('high-risk');
            riskIndicator.textContent = '高风险';
        } else if (totalScore >= 9 && totalScore <= 12) {
            riskIndicator.classList.add('medium-risk');
            riskIndicator.textContent = '中风险';
        } else {
            riskIndicator.classList.add('low-risk');
            riskIndicator.textContent = '安全';
        }
        
        // 添加动画效果
        resultSection.classList.add('calculating');
        setTimeout(() => {
            resultSection.classList.remove('calculating');
        }, 500);
        
        // 保存评估结果用于分享
        window.assessmentResult = {
            totalScore: totalScore,
            riskLevel: riskLevel,
            recommendation: recommendation
        };
    });
    
    // 分享到微信
    window.shareToWechat = function() {
        if (!window.assessmentResult) {
            alert('请先完成评估再分享');
            return;
        }
        alert('请使用微信扫描页面底部的二维码，或使用微信自带的分享功能');
    };
    
    // 分享到朋友圈
    window.shareToMoments = function() {
        if (!window.assessmentResult) {
            alert('请先完成评估再分享');
            return;
        }
        alert('请使用微信扫描页面底部的二维码，或使用微信自带的分享功能');
    };
    
    // 分享到微博
    window.shareToWeibo = function() {
        if (!window.assessmentResult) {
            alert('请先完成评估再分享');
            return;
        }
        
        const text = `我在AI替代风险评估中得分${window.assessmentResult.totalScore}分，处于${window.assessmentResult.riskLevel}。快来测测你的工作被AI替代的风险吧！`;
        const url = encodeURIComponent(window.location.href);
        const shareUrl = `http://service.weibo.com/share/share.php?title=${encodeURIComponent(text)}&url=${url}`;
        window.open(shareUrl, '_blank');
    };
    
    // 复制结果
    window.copyResult = function() {
        if (!window.assessmentResult) {
            alert('请先完成评估再分享');
            return;
        }
        
        const text = `AI替代风险评估结果\n\n总分：${window.assessmentResult.totalScore}分\n风险等级：${window.assessmentResult.riskLevel}\n\n建议：\n${window.assessmentResult.recommendation}`;
        
        navigator.clipboard.writeText(text).then(() => {
            alert('结果已复制到剪贴板！');
        }).catch(() => {
            alert('复制失败，请手动复制');
        });
    };
    
    // 重置功能
    resetBtn.addEventListener('click', function() {
        // 重置所有单选按钮为1分
        const radioGroups = ['task-repetition', 'decision-complexity', 'creativity-requirement', 'interpersonal-interaction', 'professional-barrier'];
        
        radioGroups.forEach(groupName => {
            const radioButtons = document.querySelectorAll(`input[name="${groupName}"]`);
            radioButtons.forEach(radio => {
                if (radio.value === '1') {
                    radio.checked = true;
                }
            });
        });
        
        // 重置结果展示
        document.getElementById('total-score-value').textContent = '--';
        document.getElementById('risk-level-value').textContent = '--';
        document.getElementById('recommendation-content').textContent = '请完成所有维度的评分并点击计算结果按钮';
        
        // 重置风险指示器
        const riskIndicator = document.getElementById('risk-indicator');
        riskIndicator.className = 'risk-indicator';
        riskIndicator.textContent = '';
    });
});
