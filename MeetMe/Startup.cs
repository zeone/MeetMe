using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLogic.Services.Implementation;
using BusinessLogic.Services.Interfaces;
using DbRepository;
using DbRepository.Factories;
using DbRepository.Interfaces;
using DbRepository.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Models;

namespace MeetMe
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            string dbConStr = Configuration.GetConnectionString("DefaultConnection");

            services.AddMvc();

            services.AddScoped<IRepositoryContextFactory, RepositoryContextFactory>();
            services.AddScoped<IEventRepository>(prov =>
                new EventRepository(dbConStr, prov.GetService<IRepositoryContextFactory>()));
            services.AddScoped<IUserRepository>(prov =>
                new UserRepository(dbConStr, prov.GetService<IRepositoryContextFactory>()));
            services.AddScoped<IEventService, EventService>();

            //autorization
            services.AddIdentity<User, ApplicationRole>()
                .AddEntityFrameworkStores<RepositoryContext>()
                .AddDefaultTokenProviders();
            //services.AddIdentity<User, ApplicationRole>()
            //    .AddEntityFrameworkStores<RepositoryContext>();
            //services.AddAuthentication().AddFacebook(opt =>
            //    opt.AppId = "");



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
         //   app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
