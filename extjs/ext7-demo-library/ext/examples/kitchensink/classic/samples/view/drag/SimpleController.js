/**
 * This example shows how to setup a simple drag for an element.
 */
Ext.define('KitchenSink.view.drag.SimpleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.drag-simple',

    afterRender: function(view) {
        this.source = new Ext.drag.Source({
            element: view.el.down('.simple-source'),
            constrain: view.body,

            listeners: {
                dragmove: function(source, info) {
                    var pos = info.element.current,
                        html;

                    html = Ext.String.format(
                        'X: {0}<br>Y: {1}',
                        Ext.Number.roundToPrecision(pos.x, 2),
                        Ext.Number.roundToPrecision(pos.y, 2)
                    );

                    source.getElement().setHtml(html);
                },

                dragend: function(source) {
                    source.getElement().setHtml('Drag Me!');
                }
            }
        });
    },

    destroy: function() {
        this.source = Ext.destroy(this.source);

        this.callParent();
    }
});
