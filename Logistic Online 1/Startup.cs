using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Logistic_Online_1.Startup))]
namespace Logistic_Online_1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
