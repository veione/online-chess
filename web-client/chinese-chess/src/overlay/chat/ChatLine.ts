import Message from "../../online/chat/Message";

export default class ChatLine extends eui.Group {
    constructor(msg: Message) {
        super();
        
        let layout = new eui.HorizontalLayout();
        layout.gap = 18;
        let container = new eui.Group();
        container.layout = layout;

        let headLayout = new eui.HorizontalLayout();
        headLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
        let group = new eui.Group();
        group.layout = headLayout;

        // 时间
        let txtTime = new eui.Label();
        txtTime.text = this.formatTime(msg.timestamp);
        txtTime.size = 18;
        group.addChild(txtTime);

        // 昵称
        let txtNickname = new eui.Label();
        txtNickname.width = 130;
        txtNickname.textColor = msg.isFromMe ? 0xcc2200 : 0xffffff;
        txtNickname.text = msg.sender.nickname + ':';
        txtNickname.size = 20;
        txtNickname.textAlign = egret.HorizontalAlign.RIGHT;
        group.addChild(txtNickname);

        container.addChild(group);

        // 内容
        let txtContent = new eui.Label();
        txtContent.text = msg.content;
        txtContent.size = 20;
        container.addChild(txtContent);

        this.addChild(container);
    }

    private formatTime(timestamp: number) {
        let time = new Date(timestamp);
        const pad = (n: number) => n > 9 ? n : '0' + n;
        return `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;
    }
}