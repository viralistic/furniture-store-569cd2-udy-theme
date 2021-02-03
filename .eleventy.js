
      const filters = require('./_utils/filters.js');
      
      module.exports = function(eleventyConfig) {

        function priceTemplate(amount, currencyCode) {
            return `$ ${amount} USD`;
        }

        filters(eleventyConfig, {"decimal":".","fractionDigits":2,"group":",","hideDecimalForWholeNumbers":false,"symbol":"$","template":"{{wf {\"path\":\"symbol\",\"type\":\"PlainText\"} }} {{wf {\"path\":\"amount\",\"type\":\"CommercePrice\"} }} {{wf {\"path\":\"currencyCode\",\"type\":\"PlainText\"} }}","currencyCode":"USD"}, priceTemplate);

        eleventyConfig.addPassthroughCopy("static/**");

        eleventyConfig.addPassthroughCopy("admin/**");
        
        return {
          dir: {
            input: "site",
            includes: "_views",
            output: "public"
          }
        };
      };