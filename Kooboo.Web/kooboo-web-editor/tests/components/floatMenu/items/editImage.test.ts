import context from "@/common/context";
import { SelectedDomEventArgs } from "@/events/SelectedDomEvent";
import { createEditImageItem } from "@/components/floatMenu/items/editImage";

describe("editImage", ()=>{
    beforeEach(()=>{
        document.body.innerHTML = "";
    })

    test("createEditImageItem_update", ()=>{
        document.body.innerHTML = `
        <!--#kooboo--objecttype='view'--nameorid='member'--boundary='154'-->
        <div class="widget widget-intro" kooboo-id="1-0">
            <article class="content" kooboo-id="1-0-1-1-1-1">
                <img src="/images/logo.png" alt="LOGO" title="" style="height: 23px;" kooboo-id="1-0-1-1-1-1-1">
                <p kooboo-id="1-0-1-1-1-1-5">大数据与人工智能是未来主要研发方向。</p>
            </article>
        </div>
        <!--#kooboo--end='true'--objecttype='view'--boundary='154'-->
        `;

        let elementObject = createEditImageItem();
        expect(elementObject.el.style.display).toEqual("");

        // 不能是body元素
        context.lastSelectedDomEventArgs = new SelectedDomEventArgs(document.body as HTMLElement);
        elementObject.update();
        expect(elementObject.el.style.display).toEqual("none");

        context.lastSelectedDomEventArgs = new SelectedDomEventArgs(document.body.children[0].children[0].children[0] as HTMLElement);
        elementObject.update();
        expect(elementObject.el.style.display).toEqual("block");
    })

    test("createEditImageItem_update_noImgElement", ()=>{
        document.body.innerHTML = `
        <!--#kooboo--objecttype='contentrepeater'--nameorid='6a883ab8-435c-cd7c-9ac1-5473fd6f1788'--folderid='ffa232c4-ca49-9c07-8b43-fd30d5ec5e8b'--bindingvalue='List_Item'--boundary='171'-->
        <div class="widget widget-intro" kooboo-id="1-0">
            <article class="content" kooboo-id="1-0-1-1-1-1">
                <h2 kooboo-id="1-0-1-1-1-1-3">Mailaaaa</h2>
                <p kooboo-id="1-0-1-1-1-1-5">大数据与人工智能是未来主要研发方向。</p>
            </article>
        </div>
        <!--#kooboo--end=true--objecttype='contentrepeater'--boundary='171'-->
        `;

        let selectedElement = document.body.children[0].children[0].children[0] as HTMLElement;

        context.lastSelectedDomEventArgs = new SelectedDomEventArgs(selectedElement);

        let elementObject = createEditImageItem();
        expect(elementObject.el.style.display).toEqual("");

        elementObject.update();
        expect(elementObject.el.style.display).toEqual("none");
    })

    // 存在attribute类型，说明img使用的是content的数据类型，不能直接编辑
    test("createEditImageItem_update_existAttrType", ()=>{
        document.body.innerHTML = `
        <!--#kooboo--objecttype='contentrepeater'--nameorid='6a883ab8-435c-cd7c-9ac1-5473fd6f1788'--folderid='ffa232c4-ca49-9c07-8b43-fd30d5ec5e8b'--bindingvalue='List_Item'--boundary='171'-->
        <div class="widget widget-intro" kooboo-id="1-0">
            <article class="content" kooboo-id="1-0-1-1-1-1">
                <!--#kooboo--objecttype='attribute'--nameorid='6a883ab8-435c-cd7c-9ac1-5473fd6f1788'--attributename='src'--bindingvalue='{List_Item.img-logo}'--koobooid='1-0-1-1-1-1-1-1'-->
                <img src="/images/logo.png" alt="LOGO" title="" style="height: 23px;" kooboo-id="1-0-1-1-1-1-1">
                <p kooboo-id="1-0-1-1-1-1-5">大数据与人工智能是未来主要研发方向。</p>
            </article>
        </div>
        <!--#kooboo--end=true--objecttype='contentrepeater'--boundary='171'-->
        `;

        let selectedElement = document.body.children[0].children[0].children[0] as HTMLElement;

        context.lastSelectedDomEventArgs = new SelectedDomEventArgs(selectedElement);

        let elementObject = createEditImageItem();
        expect(elementObject.el.style.display).toEqual("");

        elementObject.update();
        expect(elementObject.el.style.display).toEqual("none");
    })

    test("createEditImageItem_update_noExistInView", ()=>{
        document.body.innerHTML = `
        <!--#kooboo--objecttype='contentrepeater'--nameorid='6a883ab8-435c-cd7c-9ac1-5473fd6f1788'--folderid='ffa232c4-ca49-9c07-8b43-fd30d5ec5e8b'--bindingvalue='List_Item'--boundary='171'-->
        <div class="widget widget-intro" kooboo-id="1-0">
            <article class="content" kooboo-id="1-0-1-1-1-1">
                <img src="/images/logo.png" alt="LOGO" title="" style="height: 23px;" kooboo-id="1-0-1-1-1-1-1">
                <p kooboo-id="1-0-1-1-1-1-5">大数据与人工智能是未来主要研发方向。</p>
            </article>
        </div>
        <!--#kooboo--end=true--objecttype='contentrepeater'--boundary='171'-->
        `;

        let selectedElement = document.body.children[0].children[0].children[0] as HTMLElement;

        context.lastSelectedDomEventArgs = new SelectedDomEventArgs(selectedElement);

        let elementObject = createEditImageItem();
        expect(elementObject.el.style.display).toEqual("");

        elementObject.update();
        expect(elementObject.el.style.display).toEqual("none");
    })
})