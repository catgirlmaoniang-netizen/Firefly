import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 赞助用途说明
	usage:
		"您的赞助将用于服务器维护、内容创作和功能开发，帮助我持续提供优质内容。",

	// 是否显示赞助者列表
	showSponsorsList: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否在文章详情页底部显示赞助按钮
	showButtonInPost: true,

	// 赞助方式列表
	methods: [
		{
			name: "支付宝",
			icon: "fa7-brands:alipay",
			// 收款码图片路径（需要放在 public 目录下）
			qrCode: "/assets/images/alipay.PNG",
			link: "",
			description: "使用 支付宝 扫码赞助",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "/assets/images/wechat.PNG",
			link: "",
			description: "使用 微信 扫码赞助",
			enabled: true,
		},
	],

	// 赞助者列表（可选）
	sponsors: [
		// 示例：已实名赞助者
		{
			name: "Baka加百列",
			avatar:
				"https://image.299967.xyz/file/1780205001827_b_13a95044d92d2256817ca478953ce15c.jpg",
			amount: "¥100",
			date: "2026-05-15",
		},
		{
			name: "苒Ziling8345",
			avatar:
				"https://image.299967.xyz/file/1780205076206_b_f2e5245ad634e0a68d9a2e17e706b7c7.jpg",
			amount: "¥90",
			date: "2026-05-22",
		},
		{
			name: "LZR旬欢",
			avatar:
				"https://image.299967.xyz/file/1780205167404_b_8060e9d45eb4f605436fe840712b628b.jpg",
			amount: "¥50",
			date: "2026-05-15",
		},

		// 示例：匿名赞助者
		{
			name: "占位",
			// avatar: "",
			amount: "¥9999999999999999999",
			date: "2999-01-01",
		},
	],
};
