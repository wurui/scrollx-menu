<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.scrollx-menu">
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-scrollx-menu" ox-mod="scrollx-menu">
        	<div class="scroller">
	            <xsl:for-each select="data/ui-entry/i">
                    <nobr>
    	            	<a href="{href}">
                            <xsl:value-of select="title"/>
                        </a>
                    </nobr>
	            </xsl:for-each>
	        </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
