/**
 * Created by gxx on 17/2/28.
 */

//注册
const register  = 'esb/register/register.jhtml';

//登录
const login  = 'esb/login/login.jhtml';

//退出登录
const logout  = 'esb/logout/logout.jhtml';

//找回密码
const forgetPwd  = 'esb/findPasswordBack/findPasswordBack.jhtml';

//验证码图片
const picCode  = 'esb/register/getPicCodeApi.jhtml';

//注册手机验证码
const phoneCode  = 'esb/common/sendSMSH5.jhtml';

//找回密码手机验证码
const picCodeH5  = 'esb/common/sendSMS.jhtml';

//获取页面token
const getPageToken  = 'esb/common/getPageToken.jhtml';

//更新最后登录
const updateLastLongitudeAndLatitude  = 'esb/updateLastLongitudeAndLatitude/updateLastLongitudeAndLatitude.jhtml';

//获取字典城市数据
const addrList  = 'esb/getRegionList/getRegionByOrderH5List.jhtml';

//获取地址code
const getRegionCodeByName  = 'esb/getRegionList/getRegionCodeByName.jhtml';

// 获取字典对照值
const getDictCode  = 'esb/getDictCode/getDictCodeDesc.jhtml';

//获取字典数据
const dictionary  = 'esb/getDictCode/getDictCodeList.jhtml';

//获取用户信息
const customerBase  = 'esb/customer/getCustomerBase.jhtml';

//获取进件状态
const fetchcase  = 'esb/caseInfo/getApplyStatus.jhtml';

// 获取银行卡列表
const getBankInfo  = 'esb/getAccountCardList/getAccountCardList.jhtml';


// 获取活动规则
const getRecomfrInfoApi  = 'esb/ProductProtocol/GetRecomfrInfoApi.jhtml';

// 获取借款记录
const getLoanList  = 'esb/account/loanList.jhtml';




// 获取进件
const getApplyStatus  = 'esb/caseInfo/getApplyStatus.jhtml';



// 查询用户信息认证录入进度
const getCustomerAuthInfoSchedule  = 'esb/customerAuth/getCustomerAuthInfoSchedule.jhtml';
// 获取客户信息
const getCustomerBase  = 'esb/customer/getCustomerBase.jhtml';
// 保存客户信息
const saveCustomerBaseInfo  = 'esb/customerAuth/saveCustomerBaseInfo.jhtml';
// 上传身份证图片信息
const saveCustomerIDInfoH5  = 'esb/customerAuth/saveCustomerIDInfoH5.jhtml';
// 保存联系人
const saveCustomerContactInfo  = 'esb/customerAuth/saveCustomerContactInfo.jhtml';
// 获取客户职业信息
const getCustomerCarrer  = 'esb/customer/getCustomerCarrer.jhtml';
// 保存客户职业信息
const saveCustomerCarrer  = 'esb/customer/saveCustomerCarrer.jhtml';




export default{
  register,
  login,
  logout,
  forgetPwd,
  picCode,
  phoneCode,
  picCodeH5,
  getPageToken,
  updateLastLongitudeAndLatitude,
  addrList,
  getRegionCodeByName,
  getDictCode,
  dictionary,
  customerBase,
  fetchcase,
  getBankInfo,
  getRecomfrInfoApi,
  getLoanList,
  getApplyStatus,
  getCustomerAuthInfoSchedule,
  getCustomerBase,
  saveCustomerBaseInfo,
  saveCustomerIDInfoH5,
  saveCustomerContactInfo,
  getCustomerCarrer,
  saveCustomerCarrer,
};
