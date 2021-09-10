import requset from '@/utils/request'
// 获取首页统计信息
export const getPanelStatistical = (data) => {
    return requset({
        url: 'Topic/panelStatistical',
        method: 'get',
        data,
    })
}
// 获取题库列表
export const getQuestionBankList = (data) => {
    return requset({
        url: 'QuestionBank/Lists',
        method: 'get',
        data,
    })
}
// 获取章节列表
export const getChapterList = (data) => {
    return requset({
        url: 'practice/chapter',
        method: 'get',
        data,
    })
}
// 获取打卡数据
export const getClockDetails = (data) => {
    return requset({
        url: '/DailyClock/details',
        method: 'get',
        data,
    })
}
// 历年真题列表
export const getRealTestPapers = (data) => {
    return requset({
        url: 'RealTopic/realTestPapers',
        method: 'get',
        data,
    })
}
// 模拟考试记录列表
export const getMockExamHistory = (data) => {
    return requset({
        url: 'MockExam/history',
        method: 'get',
        data,
    })
}
// 自主出题题目列表
export const getIndependentPapers = (data) => {
    return requset({
        url: 'independent/independentPapers',
        method: 'get',
        data,
    })
}
// 刷题挑战排行榜列表
export const getRankList = (data) => {
    return requset({
        url: '/Challenge/rank',
        method: 'get',
        data,
    })
}
// 刷题挑战排行榜-我的成绩
export const getSelfAchievement = (data) => {
    return requset({
        url: '/Challenge/myself',
        method: 'get',
        data,
    })
}
// 收藏夹列表
export const getFavoritesList = (data) => {
    return requset({
        url: '/UserTopicRecord/chapter',
        method: 'get',
        data,
    })
}
