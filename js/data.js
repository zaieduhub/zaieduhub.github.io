/* ZAI CMS - Auto-generated 2026-07-19 13:27 */
const ZAI_CONTENT = {

};
function getSubjectContent(grade, key) {
    if (!ZAI_CONTENT[grade]) return null;
    return ZAI_CONTENT[grade][key] || null;
}
function getGradeSubjects(grade) {
    const m = {'al':'al','ol':'ol','grade6-9':'grade6_9','grade1-5':'grade1_5'};
    const k = m[grade];
    return (k && ZAI_CONTENT[k]) ? ZAI_CONTENT[k] : {};
}
