import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "鱼籽的Minecraft服务器网站",
		imgurl:
			"https://image.299967.xyz/file/1780203871784_minecraft.PNG",
		desc: "欸！云朵...",
		siteurl: "https://www.299967.xyz",
		tags: ["Minecraft"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "鱼籽的Image图床",
		imgurl: "https://image.299967.xyz/file/1780204037916_imgbed.png",
		desc: "原神！启动！",
		siteurl: "https://image.299967.xyz",
		tags: ["image"],
		weight: 9,
		enabled: true,
	},
	{
		title: "鱼籽的QQ群聊",
		imgurl: "https://image.299967.xyz/file/1780204450374_QQ.jpg",
		desc: "最新福利！加群送猫娘",
		siteurl: "https://qm.qq.com/q/ZoqhdqKSk4",
		tags: ["QQ群聊"],
		weight: 8,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
